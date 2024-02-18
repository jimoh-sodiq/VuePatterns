<script setup lang="ts">
import { computed } from "vue"

const emit = defineEmits<{
  (event: "changePage", page: number): void
}>()

const props = withDefaults(
  defineProps<{
    currentPage?: number
    pageSize?: number
    totalPages?: number
    alwaysShowNextAndPrevious: boolean // show back and next buttons even if disabled
  }>(),
  {
    currentPage: 1,
    pageSize: 50,
    totalPages: 1,
    alwaysShowNextAndPrevious: true
  },
)


const changeCurrentPage = (page: number) => {
  if (page === props.currentPage) return
  emit("changePage", page)
}

const hasNextPage = computed(() => props.currentPage < props.totalPages)

const hasPrevPage = computed(() => !!(props.currentPage - 1))

const prevPage = computed(() => {
  const prev = [props.currentPage - 1]
  return prev.filter((page) => page > 0)
})

const nextPage = computed(() => {
  const next = [props.currentPage + 1]
  return next.filter((page) => page <= lastPage.value)
})

const prevTwoPages = computed(() => {
  const prevTwo = [props.currentPage - 1, props.currentPage - 2]
  return prevTwo.filter((page) => page > 0)
})

const nextTwoPages = computed(() => {
  const nextTwo = [props.currentPage + 1, props.currentPage + 2]
  return nextTwo.filter((page) => page <= lastPage.value)
})

const lastPage = computed(() => props.totalPages)

const pagesToDisplay = computed(() => [...prevPage.value, props.currentPage, ...nextPage.value])
</script>

<template>
    <div class="flex w-fit items-center gap-x-2">

    <!-- Displays the Back Button -->
      <button
        v-if="hasPrevPage || alwaysShowNextAndPrevious"
        :disabled="currentPage === 1"
        class="text-sm font-medium flex items-center justify-center gap-x-1 rounded px-3 py-2 text-red-400 ring-[1px] ring-red-400 disabled:cursor-not-allowed disabled:text-red-200 disabled:ring-red-200"
        @click="() => changeCurrentPage(currentPage - 1)"
      >
        <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"/></svg>
        <span class="inline-block">Back</span>
      </button>

      <!-- Displays the First Page before the ellipses (not on mobile) -->
      <button
        v-if="currentPage != 1 && currentPage - 1 >= 4"
        class="hidden text-sm font-medium sm:flex items-center justify-center rounded px-3 py-2 text-red-400 ring-[1px] ring-red-400"
        @click="() => changeCurrentPage(1)"
      >
        1
      </button>

      <!-- Displays the ellipses for the First Page (not on mobile) -->
      <div
        v-if="currentPage != 1 && currentPage - 1 >= 4"
        class="hidden text-sm font-medium sm:flex items-center justify-center rounded px-3 py-2 text-red-400 ring-[1px] ring-red-400"
      >
        ...
      </div>

      <!-- Displays theCurrent Page, previous page and Next Pages based on the pagesToDisplay variable -->
      <button
        v-for="number in pagesToDisplay"
        :key="number"
        :class="
          currentPage == number ? 'bg-red-500 text-white ring-red-500' : 'text-red-400 ring-red-400'
        "
        class="text-sm font-medium flex items-center justify-center rounded px-3 py-2 ring-[1px]"
        @click="() => changeCurrentPage(number)"
      >
        {{ number }}
      </button>

      <!-- Displays the ellipses for the Last Page (not on mobile) -->
      <div
        v-if="lastPage - currentPage >= 3"
        class="hidden text-sm font-medium sm:flex items-center justify-center rounded px-3 py-2 text-red-400 ring-[1px] ring-red-400"
      >
        ...
      </div>

      <!-- Displays the lastPage After Ellipses (not on mobile) -->
      <button
        v-if="lastPage - currentPage >= 3"
        :class="
          currentPage == lastPage ? 'bg-red-500 text-white ring-red-500' : 'text-red-400 ring-red-400'
        "
        class="hidden text-sm font-medium sm:flex items-center justify-center rounded px-3 py-2 ring-[1px]"
        @click="() => changeCurrentPage(lastPage)"
      >
        {{ lastPage }}
      </button>

      <!-- Displays the Next Button -->
      <button
        v-if="hasNextPage || alwaysShowNextAndPrevious"
        :disabled="currentPage >= totalPages"
        class="text-sm font-medium flex items-center justify-center gap-x-1 rounded px-3 py-2 text-red-400 ring-[1px] ring-red-400 disabled:cursor-not-allowed disabled:text-red-200 disabled:ring-red-200"
        @click="() => changeCurrentPage(currentPage + 1)"
      >
        <span class="inline-block">Next</span>
        <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32"/></svg>
      </button>
    </div>
  </template>