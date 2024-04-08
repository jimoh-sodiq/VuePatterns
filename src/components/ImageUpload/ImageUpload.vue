<template>
<div>
  <input
    :id="inputId"
    ref="inputFileRef"
    class="hidden"
    type="file"
    accept="image/*"
    @change="handleFileInput"
  >
    <!-- This is for custom UI -->
  <slot />
</div>
</template>
 
<script setup lang="ts">
import { ref, Ref } from 'vue'

const props = withDefaults(defineProps<{
  inputId: string
}>(), {
  inputId: 'img_file_input'
})

const inputFileRef = ref(null)
const droppedFile = ref(null)
const uploadedImage = ref<string | null | ArrayBuffer>()

const handleFileInput = () => {
  if (inputFileRef.value) {
    droppedFile.value = inputFileRef.value.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      uploadedImage.value = reader.result
      emit('imageUploaded', uploadedImage.value)
    })
    reader.readAsDataURL(inputFileRef.value.files[0])
  }
}

const emit = defineEmits<{
  (e: 'imageUploaded', value: string | null | ArrayBuffer): void
}>()
</script>
 