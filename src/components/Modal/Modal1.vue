<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";

interface Props {
  open: boolean;
  closeOnEscape: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  closeOnEscape: true
});

const emit = defineEmits(["close"]);

const dialog = ref();

watchEffect(() => {
  if (props.open === true) {
    dialog.value?.showModal();
  } else dialog.value?.close();
});

onMounted(() => {
  window.addEventListener("keyup", (event) => {
    if (event.preventDefault || event.returnValue == false) {
      event.preventDefault();
    }
    if (event.key === "Escape" && props.closeOnEscape) {
      emit("close");
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("keyup", () => {
    emit("close");
  });
});
</script>

<template>
  <transition name="scale" appear :duration="500">
    <dialog
      v-if="open"
      ref="dialog"
      class="w-full h-full appearance-none p-0"
    >
      <slot />
    </dialog>
  </transition>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
  /* transform: translateX(-100vw); */
  opacity: 0;
}
</style>
