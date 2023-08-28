<script setup lang="ts">
import { ref } from "vue";
import Modal1 from "../components/Modal/Modal1.vue";

const showModal = ref(false);
</script>

<template>
  <div class="p-3 mt-4 space-y-4">
    <button @click="showModal = true" class="text-sm rounded bg-gray-400 p-2">
      Show Modal
    </button>
    <Modal1 :open="showModal" @close="showModal = false">
      <div class="bg-white h-1/2 w-1/2"> fadfadfasfadf</div>
    </Modal1>
  </div>
</template>
