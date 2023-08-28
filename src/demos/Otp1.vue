<script setup lang="ts">
import { ref } from "vue";
import Otp1 from "../components/Otp/Otp1.vue";

const otp = ref([]);

function clearOtp() {
  otp.value = [];
}
</script>

<template>
  <div class="p-3 mt-4">
    <p>Your OTP is: {{ otp }}</p>
    <p>Joined Otp: {{ otp.join("") }}</p>
    <Otp1 :input-count="5" v-model="otp" />

    <button @click="clearOtp" class="rounded-md text-xs bg-gray-400 p-2 mt-3">
      Clear OTP
    </button>
  </div>
</template>
