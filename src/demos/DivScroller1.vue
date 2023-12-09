<script setup lang="ts">
import { ref } from "vue";
import DivScroller1 from "../components/DivScroller/DivScroller1.vue";

const horizontalDiv = ref<HTMLDivElement>();
const verticalDiv = ref<HTMLDivElement>();

</script>

<template>
  <div class="mt-5">
    <div>
      <p>Horizontal Scroll {{ horizontalDiv?.clientWidth }}</p>
      <DivScroller1 :element="horizontalDiv" :distance="horizontalDiv?.clientWidth" />
      <div
        ref="horizontalDiv"
        class="mt-5 w-full overflow-auto bg-gray-700 p-3 flex items-center gap-x-4"
      >
        <div
          v-for="n in 30"
          :key="n"
          class="w-[150px] h-[150px] shrink-0 rounded bg-gray-400 flex items-center justify-center"
        >
          {{ n }}
        </div>
      </div>
    </div>

      <p class="mt-10">Vertical Scroll</p>
    <div class="flex items-center gap-x-3">
    <DivScroller1 :element="verticalDiv" :distance="verticalDiv?.clientHeight" direction="vertical" />
    <div
      ref="verticalDiv"
      class="mt-5 w-fit overflow-auto bg-gray-700 h-full max-h-[400px] p-3 flex flex-col items-center gap-y-4"
    >
      <div
        v-for="n in 15"
        :key="n"
        class="w-[150px] h-[150px] shrink-0 rounded bg-gray-400 flex items-center justify-center"
      >
        {{ n }}
      </div>
    </div>
    </div>
  </div>
</template>
