<script setup lang="ts">
import { ref } from "vue";
import Radio2 from "../components/Radio/Radio2.vue";

const userType = ref("user");
</script>

<template>
  <div class="p-3 mt-4">
    <div class="mt-4 flex gap-4 items-center max-w-[600px]">
      <Radio2
        v-model="userType"
        label="User"
        value="user"
      />
      <Radio2
        v-model="userType"
        label="Business"
        value="business"
      />
    </div>

    <p>User type is: {{ userType }}</p>
  </div>
</template>
