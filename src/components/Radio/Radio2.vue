<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    value?: any;
    label?: string;
}>();

const userType = defineModel()
</script>

<template>
    <label class="w-full relative">
        <input type="radio" class="peer hidden" :value="value" v-model="userType" />
        <div
            class="py-[30px] px-[22px] ring-[1px] ring-[#EEEEFF] text-[#B1BDCA] text-xl font-medium rounded-[11px] cursor-pointer flex items-center gap-6 peer-checked:text-green-500 peer-checked:ring-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <path fill="currentColor"
                    d="M236 96a12 12 0 0 0-.44-3.3L221.2 42.51A20.08 20.08 0 0 0 202 28H54a20.08 20.08 0 0 0-19.2 14.51L20.46 92.7A12 12 0 0 0 20 96v16a43.94 43.94 0 0 0 16 33.92V208a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-62.08A43.94 43.94 0 0 0 236 112Zm-24 16a20 20 0 0 1-40 0v-4h40Zm-168 0v-4h40v4a20 20 0 0 1-40 0m64-4h40v4a20 20 0 0 1-40 0ZM57.05 52H199l9.14 32H47.91ZM196 204H60v-48.19c1.32.12 2.65.19 4 .19a43.86 43.86 0 0 0 32-13.85a43.89 43.89 0 0 0 64 0A43.86 43.86 0 0 0 192 156c1.35 0 2.68-.07 4-.19Z" />
            </svg>
            <p>{{ label }}</p>
        </div>
        <div
            class="absolute bottom-[100%] left-[100%] translate-x-[-50%] translate-y-[50%] w-[38px] h-[38px] shrink-0 rounded-full text-white bg-brand-purple hidden peer-checked:flex items-center justify-center">
            <svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <path fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32" />
            </svg>
        </div>
</label></template>
