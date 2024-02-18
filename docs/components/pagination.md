---
outline: deep
---

<script setup>
import Pagination1 from '../../src/demos/Pagination1.vue'

</script>

# Pagination Component

This page Show an Example of a Reusable Pagination Component.

## First Pattern

A pagination is simply a row of buttons each having a unique page value (this is fully dependent on the ui design as some pagination includes input elements). So this pattern involves showing a button with some little logics to control what buttons to show and styling each button based on some conditions met.

I have also added a utility composable to wrap the functionality for projects having different pagination styling. This composable can be extended. For instance, I did not include a watcher for both the current page and the page size and a Callback option parameter for each of these changes. Please feel free to extend it to fit your need.

Three essential variables are usually needed for a pagination to work:

* the current page
* the total number of pages
* the page size

While the page size is not needed in this minimal sample, some advanced pagination design include a select box to change the page size. In this case the ability to refetch on page size change or page change is important.

### Demo

<Pagination1 />

### Dependencies

```
{
    "tailwindcss": "^3.3.2", // for styling
}
```

### Code

::: code-group

<<< ./src/components/Pagination/Pagination1.vue
<<< ./src/demos/Pagination1.vue [Demo1.vue]
<<< ./src/composables/usePagination.ts
:::
