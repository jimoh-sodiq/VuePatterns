<script setup lang="ts">
import { ref } from "vue";
import Textarea1 from "../components/Textarea/Textarea1.vue";

const address = ref("");
</script>

<template>
  <div class="p-3 mt-4">
    <p>Address is: {{ address }}</p>
    <div>
      <p class="italic text-xs font-medium uppercase">
        Normal Mode / No Resize / 4 rows
      </p>
      <Textarea1
        v-model="address"
        label="Enter address"
        placeholder="eg. Foo"
        resize="resize-none"
        :rows="4"
      ></Textarea1>
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">
        Debounce Mode (500 milliseconds) / Resize Y
      </p>
      <Textarea1
        v-model="address"
        label="Enter address"
        placeholder="eg. Foo"
        :debounce-time="500"
        resize="resize-y"
      ></Textarea1>
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">
        Disabled State / No Resize
      </p>
      <Textarea1
        v-model="address"
        label="Enter address"
        placeholder="eg. Foo"
        disabled
        resize="resize-none"
      ></Textarea1>
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">Error State</p>
      <Textarea1
        v-model="address"
        label="Enter address"
        placeholder="eg. Foo"
        required
        error
        error-text="address is required"
      ></Textarea1>
    </div>
  </div>
</template>
