---
outline: deep
---

<script setup>
import Textarea1 from '../../src/demos/Textarea1.vue'

</script>

# Textarea Component

## First Pattern

### Features

* All Textarea attributes as props
* Debounce
* autofocus support
* Error, Disabled, Focus State
* optional error, label, placeholder texts etc

### Dependencies

* "tailwindcss" - for styling
* "vueuse" - for debounce (useDebounceFn)

### Demo

<Textarea1 />

### Code

::: code-group

<<< ./src/components/Textarea/Textarea1.vue
<<< ./src/demos/Textarea1.vue [Demo.vue]

:::
