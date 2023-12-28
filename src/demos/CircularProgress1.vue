<script setup lang="ts">
import { ref } from "vue";
import CircularProgress1 from "../components/CircularProgress/CircularProgress1.vue";

const progress = ref(17);

function handleProgressChange(e: Event) {
  progress.value = (e.target as HTMLProgressElement).value;
}
</script>

<template>
  <div>
    <div class="mt-5">
      <input
        id="progressInput"
        type="range"
        min="0"
        max="100"
        step="1"
        :value="progress"
        @input="handleProgressChange"
      />
      {{ progress }}
    </div>
    <div class="flex flex-wrap gap-5 mt-8">
      <CircularProgress1 :value="progress" />
      <CircularProgress1 :value="progress" bg-circle-class="text-red-500" progress-circle-class="text-green-600" />
      <CircularProgress1 :value="progress" bg-circle-class="text-yellow-500" progress-circle-class="text-pink-600"  />
    </div>
  </div>
</template>
