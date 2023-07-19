<script setup lang="ts">
import { ref } from "vue";
import Checkbox1 from "../components/Checkbox/Checkbox1.vue";

const checked = ref(false);

const customChecked = ref([]);
</script>

<template>
  <div class="ring p-3 mt-4">
    <div>
      <p class="underline">With default Value</p>
      <Checkbox1
        v-model="checked"
        label="click me to toggle"
        name="checkboxName"
      />
      <p>value is: {{ checked }}</p>
    </div>

    <div>
      <p class="underline">With Custom Value</p>
      <Checkbox1
        v-model="customChecked"
        :value="{ name: 'jimohSodiq' }"
        label="click me to toggle"
      />

      <p>value is: {{ customChecked }}</p>
    </div>

    <div>
      <p class="underline">Disabled State</p>
      <Checkbox1
        disabled
        v-model="customChecked"
        :value="{ name: 'Foo' }"
        label="click me to toggle"
      />

      <p>value is: {{ customChecked }}</p>
    </div>
  </div>
</template>
