<script setup lang="ts">
import { ref } from "vue";
import Skeleton1 from "../components/Skeleton/Skeleton1.vue";

</script>

<template>
  <div class="p-3 mt-4 space-y-4">

    <!-- The Original markup -->
    <div class="gap-y-2 flex flex-col text-sm">
      <div class="self-end w-fit flex flex-col">
        <span>Name</span>
        <span>Address</span>
        <span>Date</span>
      </div>
      <span>Salutation</span>
      <span class="block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        deleniti repellat. Saepe neque reiciendis debitis. Perferendis sint
        magnam laboriosam distinctio odit ducimus aspernatur, labore dolore, cum
        dignissimos accusamus quis velit.
      </span>
      <span class="self-end">Yours sincerely</span>
    </div>

    <!-- The Skeleton markup -->
    <div class="gap-y-2 flex flex-col">
      <Skeleton1 class="h-12 w-12 self-end" />
      <Skeleton1 class="h-3 w-16 mt-2" />
      <Skeleton1 class="h-3" />
      <Skeleton1 class="h-3" />
      <Skeleton1 class="h-3" />
      <Skeleton1 class="h-3 w-16 self-end mt-3" />
    </div>
  </div>
</template>
