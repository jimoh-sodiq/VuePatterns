<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    value?: number;
    size?: number;
    strokeWidth?: number;
    bgCircleClass?: string;
    progressCircleClass?: string;
    textClass?: string;
  }>(),
  {
    value: 0,
    size: 200,
    strokeWidth: 10,
    bgCircleClass: "text-gray-200 dark:text-gray-700",
    progressCircleClass: "text-blue-600 dark:text-blue-500",
    textClass: "text-2xl font-bold text-gray-800 dark:text-white",
  }
);

const viewBoxComputed = computed(() => `0 0 ${props.size} ${props.size} `);
const radiusComputed = computed(() => props.size / 2 - props.strokeWidth);
const dashArrayComputed = computed(() => radiusComputed.value * Math.PI * 2);
const dashOffsetComputed = computed(
  () => dashArrayComputed.value - (dashArrayComputed.value * props.value) / 100
);
</script>

<template>
  <div class="relative w-fit">
    <svg
      class="w-full h-full"
      :width="size"
      :height="size"
      :viewBox="viewBoxComputed"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Background Circle -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radiusComputed"
        fill="none"
        class="stroke-current"
        :class="bgCircleClass"
        :stroke-width="strokeWidth"
      ></circle>
      <!-- Progress Circle inside a group with rotation -->
      <g class="origin-center -rotate-90 transform">
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radiusComputed"
          fill="none"
          class="stroke-current"
          :class="progressCircleClass"
          :stroke-width="strokeWidth"
          :stroke-dasharray="dashArrayComputed"
          :stroke-dashoffset="dashOffsetComputed"
        ></circle>
      </g>
    </svg>
    <div
      class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
    >
      <span class="text-center" :class="textClass">{{ value }}%</span>
    </div>
  </div>
</template>
