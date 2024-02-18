import { ref, computed } from "vue";
import type { Ref } from "vue";

export interface UsePaginationOptions {
  currentPage: Ref<number>;
  pageSize: Ref<number>;
  totalPages: Ref<number>;
}

export function usePagination(options: UsePaginationOptions) {
  const hasNextPage = computed(
    () => options.currentPage.value < options.totalPages.value
  );

  const hasPrevPage = computed(() => !!(options.currentPage.value - 1));

  const prevPage = computed(() => {
    const prev = [options.currentPage.value - 1];
    return prev.filter((page) => page > 0);
  });

  const nextPage = computed(() => {
    const next = [options.currentPage.value + 1];
    return next.filter((page) => page <= lastPage.value);
  });

  const prevTwoPages = computed(() => {
    const prevTwo = [
      options.currentPage.value - 1,
      options.currentPage.value - 2,
    ];
    return prevTwo.filter((page) => page > 0);
  });

  const nextTwoPages = computed(() => {
    const nextTwo = [
      options.currentPage.value + 1,
      options.currentPage.value + 2,
    ];
    return nextTwo.filter((page) => page <= lastPage.value);
  });

  const lastPage = computed(() => options.totalPages.value);

  const pagesToDisplay = computed(() => [
    ...prevPage.value,
    options.currentPage,
    ...nextPage.value,
  ]);

  return {
    hasNextPage,
    hasPrevPage,
    prevPage,
    nextPage,
    prevTwoPages,
    nextTwoPages,
    lastPage,
    pagesToDisplay,
  };
}
