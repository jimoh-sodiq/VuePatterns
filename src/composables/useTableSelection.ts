import { ref, computed, unref, watch } from "vue";
import type { Ref } from 'vue'

export function useTableSelection<T>(dataSource: Ref<T[]> | T[]) {
  
  // an array of selected rows
  const selectedRows: Ref<T[]> = ref([]);
  
  // the data source
  const source = computed<T[]>(() => {
    return unref(dataSource);
  });

  // boolean to check if all rows are selected
  const allRowsSelected = computed<boolean>(() => {
    return source.value.length === selectedRows.value.length;
  });

  // returns true is the data source is empty   
  const isEmptySource = computed(() => {
    return source.value.length == 0;
  });
  
  // returns true if at least one row is selected
  const isSelectedAvailable = computed(() => {
    return selectedRows.value.length > 0;
  });

  // sets the selected rows an empty array
  function clearSelectedRows() {
    selectedRows.value = [];
  }

  // updates the selected rows to only include data present in source in case of deletion
  watch(
    source.value,
    () => {
      selectedRows.value = selectedRows.value.filter((row) =>
        source.value.includes(row)
      );
    },
    { immediate: true }
  );

  // selects all the table rows
  function selectAllRows() {
    selectedRows.value = source.value;
  }
  
  // select or deselect all rows
  function toggleRowSelection() {
    if (selectedRows.value.length > 0) {
      selectedRows.value = [];
      return;
    }
    for (const item of source.value) {
      if (!selectedRows.value.includes(item)) {
        selectedRows.value.push(item);
      }
    }
  }

  return {
    source,
    selectedRows,
    allRowsSelected,
    toggleRowSelection,
    isEmptySource,
    isSelectedAvailable,
    clearSelectedRows,
    selectAllRows,
  };
}
