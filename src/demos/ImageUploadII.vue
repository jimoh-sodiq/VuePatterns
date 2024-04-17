<template>
<div>
  <!-- Choose to use this particular UI. You can implement your UI however you want -->
  <ImageUpload 
      input-id="multiple_img_file_input" 
      multiple 
      v-slot="{ hasUpload, deleteUpload }" 
      :accept="['image/*']" 
      @uploaded="uploadFunc"
    >
    <div class="bg-white text-center text-black rounded px-4 py-2 w-1/3 my-4">
      <label for="multiple_img_file_input" class="italic">Select multiple Image</label>
    </div>
    <div v-show="hasUpload" class="flex items-center gap-4">
      <div v-for="(data, idx) in uploadData" :key="idx" class="group relative w-40 h-40 my-2">
        <img ref="imgRef" :src="data" alt="Random Image" class="w-full h-full object-contain">
        <svg 
          class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block cursor-pointer" 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24"
          @click="deleteUpload(idx)"
        >
          <path fill="#ef4444" d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14zm1-1h10V6H7zm2.808-2h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"/>
        </svg>
      </div>
    </div>
  </ImageUpload>
</div>
</template>
 
<script setup lang="ts">
import { ref, Ref } from 'vue'
import ImageUpload from '../components/ImageUpload/ImageUpload.vue';

const uploadData = ref([])
const uploadFunc = (value: string | string[] | ArrayBuffer | null) => {
  uploadData.value = value
}
</script>
 
<style scoped>
</style>