---
outline: deep
---

<script setup>
import AccordionOne from '../../src/components/AccordionOne.vue'

</script>


# Accordion

This page Show an Example of a Reusable Accordion Component.

## Accordion ( 1 )

### Demo

<AccordionOne summary="Open To View More">
    this is the details of the accordion component. Feel free to style it to your liking
</AccordionOne>

### Dependencies

```
{
    "tailwindcss": "^3.3.2", // for styling
}
```

### Code

```js
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  summary: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});
const state = ref(props.open);
const toggleState = () => {
  state.value = !state.value;
};
</script>

<template>
  <details
    :open="open"
    class="appearance-none break-words w-full group relative p-2 ring-gray-300 ring-[1.5px] rounded"
  >
    <summary
      class="appearance-none flex gap-x-2 group-open:mb-2 items-center cursor-pointer list-none"
      @click="toggleState"
    >
      <div v-if="state" class="pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66699 16H25.3337"
            stroke="#3A91FA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div v-else class="pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.333 14.6666H17.333V6.66659C17.333 6.31296 17.1925 5.97382 16.9425 5.72378C16.6924 5.47373 16.3533 5.33325 15.9997 5.33325C15.6461 5.33325 15.3069 5.47373 15.0569 5.72378C14.8068 5.97382 14.6663 6.31296 14.6663 6.66659V14.6666H6.66634C6.31272 14.6666 5.97358 14.8071 5.72353 15.0571C5.47348 15.3072 5.33301 15.6463 5.33301 15.9999C5.33301 16.3535 5.47348 16.6927 5.72353 16.9427C5.97358 17.1928 6.31272 17.3333 6.66634 17.3333H14.6663V25.3333C14.6663 25.6869 14.8068 26.026 15.0569 26.2761C15.3069 26.5261 15.6461 26.6666 15.9997 26.6666C16.3533 26.6666 16.6924 26.5261 16.9425 26.2761C17.1925 26.026 17.333 25.6869 17.333 25.3333V17.3333H25.333C25.6866 17.3333 26.0258 17.1928 26.2758 16.9427C26.5259 16.6927 26.6663 16.3535 26.6663 15.9999C26.6663 15.6463 26.5259 15.3072 26.2758 15.0571C26.0258 14.8071 25.6866 14.6666 25.333 14.6666Z"
            fill="#3A91FA"
          />
        </svg>
      </div>

      <p class="break-all text-[#222823] text-base font-medium">
        {{ summary }}
      </p>
    </summary>
    <p class="text-sm text-[#222823]">
      <slot />
    </p>
  </details>
</template>

```