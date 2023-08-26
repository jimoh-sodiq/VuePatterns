<script setup lang="ts">
import { ref } from "vue";
import Input1 from "../components/Input/Input1.vue";

const name = ref("");
</script>

<template>
  <div class="p-3 mt-4">
    <p>Name is: {{ name }}</p>
    <div>
      <p class="italic text-xs font-medium uppercase">Normal Mode</p>
      <Input1 v-model="name" label="Enter name" placeholder="eg. Foo" />
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">
        Debounce Mode (500 milliseconds)
      </p>
      <Input1
        v-model="name"
        label="Enter name"
        placeholder="eg. Foo"
        :debounce-time="500"
      />
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">Disabled State</p>
      <Input1
        v-model="name"
        label="Enter name"
        placeholder="eg. Foo"
        disabled
      />
    </div>
    <div>
      <p class="italic text-xs font-medium uppercase">Error State</p>
      <Input1
        v-model="name"
        label="Enter name"
        placeholder="eg. Foo"
        required
        error
        error-text="name is required"
      />
    </div>
  </div>
</template>
