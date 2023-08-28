<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount, computed } from "vue";
/**
 * The component returns an array of string.
 * To clear the input simply set array to an empty one
 */

interface Props {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  inputCount?: number;
  modelValue?: string[] | number[];
  autoFocus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "*",
  disabled: false,
  inputCount: 4,
  autoFocus: true,
});

const emit = defineEmits<{
  (event: "update:modelValue", value: Array<string> | Array<number>): void;
}>();

const inputRefsHolder = ref(new Array(props.inputCount).fill(""));
const inputRefsHolderCopy = ref(new Array(props.inputCount).fill(""));

const otpValue = computed(() => {
  return inputRefsHolderCopy.value.map((otp) => (otp == null ? "" : otp));
});

function focusNext(currentIndex: number) {
  for (let i = currentIndex + 1; i < inputRefsHolder.value.length; i++) {
    if (inputRefsHolder.value[i] !== "") {
      if (inputRefsHolder.value[i].disabled) {
        continue;
      }
      inputRefsHolder.value[i].focus();
      return;
    }
  }
  return;
}

function focusPrev(currentIndex: number) {
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (inputRefsHolder.value[i] !== "") {
      if (inputRefsHolder.value[i].disabled) {
        continue;
      }
      inputRefsHolder.value[i].setSelectionRange(1, 2);
      inputRefsHolder.value[i].focus();
      return;
    }
  }
  return;
}

// handle Input
function handleInput(e: Event, index: number) {
  const targetValue = (e.target as HTMLInputElement).value;
  const temporalOtp = [...inputRefsHolderCopy.value];
  temporalOtp[index] = targetValue.substring(targetValue.length - 1);
  inputRefsHolderCopy.value = temporalOtp;
  emit("update:modelValue", otpValue.value);
}

// handle key up
function handleKeyUp(e: KeyboardEvent, index: number) {
  if (inputRefsHolder.value[index].value) {
    focusNext(index);
  }
  if (e.key === "ArrowRight") {
    focusNext(index);
  }
  if (e.key === "ArrowLeft") {
    focusPrev(index);
  }
  if (e.key === "Backspace") {
    focusPrev(index);
  }
}

function handleSpaceBar(e: KeyboardEvent, index: number) {
  e.preventDefault();
  if (e.key == " ") {
    focusNext(index);
  }
}

watchEffect(() => {
  const updatedOtpList = props.modelValue?.slice(0, props.inputCount);
  inputRefsHolderCopy.value = [
    ...(updatedOtpList as Array<string> | Array<number>),
  ];
});

function autoFocus() {
  if (props.autoFocus) {
    inputRefsHolder.value[0].focus();
  }
}

onMounted(() => {
  autoFocus();
});
</script>

<template>
  <div class="flex items-center gap-x-[22px]">
    <input
      :type="type"
      :ref="(e) => (inputRefsHolder[index] = e)"
      :value="inputRefsHolderCopy[index]"
      @input="(e) => handleInput(e, index)"
      @keyup="(e) => handleKeyUp(e, index)"
      @keydown.space="(e) => handleSpaceBar(e, index)"
      v-for="(input, index) in inputCount"
      :key="input"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-12 h-12 px-1 py-2 text-center disabled:cursor-not-allowed outline-none ring-[1px] ring-[#CEE3FF] focus:ring-[2px] focus:ring-Noja/Primary/600 transition-all duration-200 ease rounded text-lg text-Noja/Font/Black placeholder:text-Noja/Font/Black"
    />
  </div>
</template>
