<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: any;
  value?: any;
  required?: boolean;
  name?: string;
  label?: string;
  disabled?: boolean;
  variant?: string; // this is based on your needs, not implemented here
  size?: string; // based on your needs, not implemented here
}>();

const emit = defineEmits<{
  (event: "update:modelValue", data: any): void;
}>();

const checked = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <!-- style to fit your needs base on the states -->
  <label class="flex space-x-3 text-sm text-black dark:text-white w-fit">
    <input
      class="disabled:cursor-not-allowed peer"
      type="checkbox"
      v-model="checked"
      :name="name"
      :id="name"
      :value="value"
      :required="required"
      :disabled="disabled"
    />
    <p class="cursor-pointer peer-disabled:cursor-not-allowed" v-if="label">
      {{ label }}
    </p>
  </label>
</template>
