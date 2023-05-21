<script setup lang="ts">
import { useContributorList } from "../composables/useContributorList";

const contributors = useContributorList();
</script>

<template>
  <div class="max-w-[960px] mx-auto">
    <h2 class="text-center mb-6 px-2 text-2xl font-medium">Contributors</h2>
    <div class="text-center">
      <a 
        v-for="(contributor, index) in contributors"
        :href="contributor.link"
        :alt="contributor.name"
        target="_blank"
        :key="contributor.link + index"
        class="w-16 h-16 inline-block ring-[0.5px] cursor-pointer ring-gray-300 dark:ring-gray-50 oveflow-hidden rounded-full"
      >
        <img
          load="lazy"
          :src="contributor.avatar"
          class="bg-cover"
        />
      </a>
    </div>
  </div>
</template>
