<script setup lang="ts">
import { useSponsorList } from "../composables/useSponsorList";

const sponsors = useSponsorList();
</script>

<template>
  <div class="max-w-[960px] mx-auto" v-if="sponsors.length">
    <h2 class="text-center mb-6 px-2 text-2xl font-medium">sponsors</h2>
    <div class="text-center">
      <a
        v-for="(sponsor, index) in sponsors"
        :href="sponsor.link"
        :alt="sponsor.name"
        target="_blank"
        :key="sponsor.link + index"
        class="w-[70px] h-[70px] inline-block ring-[0.5px] cursor-pointer ring-gray-300 dark:ring-gray-50 oveflow-hidden rounded-full"
      >
        <img load="lazy" :src="sponsor.avatar" class="bg-cover" />
      </a>
    </div>
  </div>
</template>
