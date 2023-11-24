<script setup lang="ts">
import { ref } from "vue";
import Spinner1 from "../components/Spinner/Spinner1.vue";
</script>

<template>
  <p>Variant can either be small, medium or large.</p>
  <p>The color can be any valid tailwind color class</p>
  <div class="p-3 mt-4 gap-4 h flex items-center">
    <Spinner1 size="medium" />
    <Spinner1 size="small" color="text-green-600" />
    <Spinner1 size="medium" color="text-blue-600 dark:text-blue-500" />
    <Spinner1 size="large" color="text-orange-600" />
    <Spinner1 size="small" color="text-pink-600" />
    <Spinner1 size="medium" color=" text-purple-600" />
    <Spinner1 size="large" color="text-indigo-600" />
  </div>
</template>
