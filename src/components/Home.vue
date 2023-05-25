<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme";
import Contributors from "./Contributors.vue";
import Sponsors from "./Sponsors.vue";

const inspirations = [
  {
    avatar: "https://github.com/antfu.png",
    name: "Anthony Fu",
    title: "Creator of VueUse",
    links: [{ icon: "github", link: "https://github.com/antfu" }],
  },
  {
    avatar: "https://github.com/neymarjimoh.png",
    name: "Jimoh Adekunle",
    title: "Backend Engineer",
    links: [
      { icon: "github", link: "https://github.com/neymarjimoh" },
      { icon: "linkedin", link: "https://linkedin.com/in/jimoh-rildwan-adekunle-/" },
    ],
  },
];

const creator = [
  {
    avatar: "https://github.com/jimoh-sodiq.png",
    name: "Jimoh Sodiq",
    title: "Frontend Developer",
    links: [{ icon: "github", link: "https://github.com/jimoh-sodiq" }],
  },
];
</script>

<template>
  <div class="px-4 space-y-10">
    <div
      class="flex mt-10 gap-y-10 flex-col sm:flex-row items-center mx-auto gap-x-6 w-fit"
    >
      <div>
        <h2 class="text-center mb-6 px-2 text-2xl font-medium">
          Highly Inspired By
        </h2>
        <VPTeamMembers size="small" :members="inspirations" />
      </div>
      <div>
        <h2 class="text-center mb-6 px-2 text-2xl font-medium">Created By</h2>
        <VPTeamMembers size="small" :members="creator" />
      </div>
    </div>

    <Sponsors />

    <Contributors />
  </div>
</template>
