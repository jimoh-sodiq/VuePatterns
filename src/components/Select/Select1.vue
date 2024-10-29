<script setup lang="ts">
const emit = defineEmits<{
  (e: "change"): void
}>()
const model = defineModel();
</script>

<template>
	<div
		class="sea-text-paragraph2-medium relative inline-block h-[38px] shrink-0 cursor-pointer overflow-clip rounded-lg border-[1px] border-seaborder-1 bg-white text-smctext-primary outline-none"
	>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32"/></svg>
		<select
			@change="emit('change')"
			v-model="model"
			class="h-[38px] appearance-none bg-transparent pl-4 pr-5 outline-none"
		>
			<slot />
		</select>
	</div>
</template>
