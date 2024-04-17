<template>
<div>
  <form ref="form">
    <input
      :id="inputId"
      ref="inputFileRef"
      class="hidden"
      type="file"
      :accept="compAccept"
      :multiple="multiple"
      @change="handleFileInput"
    >
  </form>
    <!-- This is for custom UI -->
  <slot 
    :hasUpload="hasUpload"
    :deleteUpload="deleteUpload"
  />
</div>
</template>
 
<script setup lang="ts">
import { computed, ref, Ref } from 'vue'

const props = withDefaults(defineProps<{
  inputId: string,
  multiple?: boolean,
  accept?: string[]
}>(), {
  inputId: 'img_file_input',
  multiple: false,
  accept: ['image/*']
})

const inputFileRef = ref<HTMLInputElement>()
const droppedFile = ref(null)
const form = ref<HTMLFormElement>()
const hasUpload = ref(false)
const uploadedImage = ref<string | null | ArrayBuffer>()
const multipleImageUpload = ref([])
const compAccept = computed(() => props.accept.join(','))

const handleFileInput = () => {
  if (inputFileRef.value) {
    if(!inputFileRef.value.files) return
    if(props.multiple) {
      let filesProcessed = 0
      for (const file of inputFileRef.value.files) {
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          multipleImageUpload.value.push(reader.result)
          filesProcessed++
          
          if (filesProcessed === inputFileRef.value.files.length) {
            hasUpload.value = multipleImageUpload.value.length >= 1
            emit('uploaded', multipleImageUpload.value, inputFileRef.value.files)
          }
        })
        reader.readAsDataURL(file)
      }
      return
    }
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      uploadedImage.value = reader.result
      hasUpload.value = !!uploadedImage.value  
      emit('uploaded', uploadedImage.value, inputFileRef.value.files[0])
    })
    reader.readAsDataURL(inputFileRef.value.files[0])
  }
}

const deleteUpload = (idx?: number) => {
  if(props.multiple) {
    multipleImageUpload.value.splice(idx, 1)
    if (multipleImageUpload.value.length === 0) hasUpload.value = false; form.value?.reset()
  }
  // this is the make sure the onChange event is always fired
  form.value?.reset()
  uploadedImage.value = null
  hasUpload.value = false
}

const emit = defineEmits<{
  (e: 'uploaded', value: string | string[] | ArrayBuffer | null, file?: FileList | undefined | null): void
}>()
</script>
 