<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    loadingText?: string;
    size?: "large" | "medium" | "small";
    color?: string
  }>(),
  {
    loadingText: "Loading...",
    size: "medium",
    color: ""
  }
);

const spinnerClass = computed(() => {
  let base =
    "animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full";
  if (props.size == "large") {
    base += " w-10 h-10";
  } else if (props.size == "medium") {
    base += " w-7 h-7";
  } else {
    base += " w-4 h-4";
  }
  base += " " + props.color
  return base;
});
</script>

<template>
  <!-- html markup code gotten from https://preline.co/docs/spinners.html  -->
  <div :class="spinnerClass" role="status" aria-label="loading">
    <span class="sr-only">{{ loadingText }}</span>
  </div>
</template>
