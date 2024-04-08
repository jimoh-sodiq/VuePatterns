<template>
<div>
  <!-- Choose to use this particular UI. You can implement your UI however you want -->
  <ImageUpload input-id="img_file_input" @imageUploaded="imageSrc($event)">
    <div class="bg-white text-center text-black rounded px-4 py-2 w-1/5">
      <label for="img_file_input" class="italic">Select Image</label>
    </div>
    <div v-show="imgSrc" class="group relative w-40 h-40 my-2">
      <img ref="imgRef" alt="Random Image" class="w-full h-full object-contain">
      <svg 
        class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block cursor-pointer" 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24"
        @click="imgSrc = null"
        >
          <path fill="#ef4444" d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14zm1-1h10V6H7zm2.808-2h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"/>
        </svg>
    </div>
  </ImageUpload>
</div>
</template>
 
<script setup lang="ts">
import { ref, Ref } from 'vue'
import ImageUpload from '../components/ImageUpload/ImageUpload.vue';

const imgRef = ref() as Ref<HTMLImageElement>
const imgSrc = ref<string | null | ArrayBuffer>(null)
const imageSrc = (value: string | null | ArrayBuffer) => {
  imgSrc.value = value
  imgRef.value.setAttribute('src', imgSrc.value)
}
</script>
 
<style scoped>
</style>