---
outline: deep
---

<script setup>
import ImageUpload from '../../src/demos/ImageUpload.vue'
import ImageUploadII from '../../src/demos/ImageUploadII.vue'

</script>

# Image Upload

This page show an example of a Reusable Image Upload Component. The idea is to help with all the logic you will possibly need to implement image upload functionality and focus on just the UI. 
> This is still a work in progress

### Dependencies

```
{
    "tailwindcss": "^3.3.2", // for styling
}
```
### Props
These are the props passed into the ImageUpload component

#### inputId
- Type: `String`

This is to target the hidden input field outside the component

#### multiple
- Type: `Boolean`
- default: `fasle`

If you want to upload multiple images, you can set this to true. And yes you don't have to worry about the logic

#### accept
- Type: `Array`
- default: `['image/*']`

This is to signify the image format you want. It has to be the same as default accept format (i.e .jpg, .png, etc)

### Events

#### @uploaded(value: string | string[] | ArrayBuffer | null, file: FileList | null | undefined)
This fires after a successful upload. It returns both image src and the fileList so you can use however you want


### Demo

<ImageUpload />

<ImageUploadII />

### Code

::: code-group

<<< ./src/demos/ImageUpload.vue [Demo.vue]
<<< ./src/demos/ImageUploadII.vue [DemoII.vue]

:::