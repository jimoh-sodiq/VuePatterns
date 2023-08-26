<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useDebounceFn } from "@vueuse/core";

const emit = defineEmits<{
  (event: "update:modelValue", value: string | number): void;
  (event: "onTextChanged", value: string | number): void;
}>();

interface Prop {
  type?: string;
  modelValue?: string | number;
  id?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  max?: string;
  autofocus?: boolean;
  debounceTime?: number;
  maxWaitTime?: number;
}

const props = withDefaults(defineProps<Prop>(), {
  type: "text",
  modelValue: "",
  id: "",
  label: "",
  placeholder: "",
  required: false,
  error: false,
  errorText: "",
  disabled: false,
  max: "",
  autofocus: false,
  debounceTime: 0,
  maxWaitTime: 5000,
});

const inputFieldRef = ref() as Ref<HTMLInputElement>;

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("onTextChanged", target.value);
  if (props.type === "number") {
    return debouncedEmit("update:modelValue", Number(target.value));
  }
  debouncedEmit("update:modelValue", target.value);
};

/**
 * this controls the debounce time for the input field
 * default is 0 max is 5000
 */

const debouncedEmit = useDebounceFn(
  (emitText, value) => {
    emit(emitText, value);
  },
  props.debounceTime,
  { maxWait: props.maxWaitTime }
);

function focusInput() {
  inputFieldRef.value.focus();
}

watch(inputFieldRef, () => {
  if (props.autofocus === true) {
    inputFieldRef.value.focus();
  }
});

const labelClass = computed(() => {
  let base = "block text-[13px] first-letter:capitalize mb-[6px] w-fit";
  if (props.disabled) {
    base += " text-gray-300 dark:text-gray-700";
  } else if (props.error) {
    base += " text-red-500";
  } else {
    base += " text-gray-700";
  }
  return base;
});

const inputClass = computed(() => {
  let base =
    "h-[43px] px-[14px] w-full outline-none text-sm rounded-[4px] transition-all ease duration-200";
  if (props.disabled) {
    base += " placeholder:text-gray-300 dark:placeholder:text-gray-700 ring-[1px] ring-gray-300 dark:ring-gray-700 cursor-not-allowed";
  } else if (props.error) {
    base += " ring-[1.5px] ring-red-500";
  } else {
    base +=
      " placeholder:text-grey-300 ring-[1px] ring-green-300 focus:ring-[1.5px] focus:ring-green-600";
  }
  return base;
});
</script>

<template>
  <div class="w-full">
    <label @click="focusInput" :class="labelClass" v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      :class="inputClass"
      :placeholder="placeholder"
      :id="id"
      :type="type"
      :max="max"
      :value="modelValue"
      @input="handleInput"
      :required="required"
      :disabled="disabled"
      ref="inputFieldRef"
    />
    <p
      class="block text-xs first-letter:capitalize mt-[6px] text-red-500"
      v-if="error && errorText && !disabled"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
