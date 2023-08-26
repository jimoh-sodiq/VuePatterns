<script setup lang="ts">
import { ref } from "vue";
import Radio1 from "../components/Radio/Radio1.vue";

const checked = ref({ name: "Ade" });
</script>

<template>
  <div class="ring p-3 mt-4">
    <div>
      <p class="underline">Only one Can be selected at a time</p>
      <Radio1
        v-model="checked"
        label="Select Sodiq"
        :value="{ name: 'Sodiq' }"
        name="checkboxName"
      />
      <Radio1
        v-model="checked"
        label="Select Ade"
        :value="{ name: 'Ade' }"
        name="checkboxName"
      />
    </div>

    <div>
      <p class="underline">Disabled State</p>
      <Radio1
        disabled
        v-model="checked"
        :value="{ name: 'Foo' }"
        label="Cannot Select"
      />
    </div>

    <p>value is: {{ checked }}</p>
  </div>
</template>
