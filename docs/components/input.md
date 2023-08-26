---
outline: deep
---

<script setup>
import Input1 from '../../src/demos/Input1.vue'

</script>

# Input Component

## First Pattern

### Features

* Multi type support
* Debounce
* autofocus support
* Error, Disabled, Focus State
* optional error, label, placeholder texts etc

### Dependencies

* "tailwindcss" - for styling
* "vueuse" - for debounce (useDebounceFn)

### Demo

<Input1 />

### Code

::: code-group

<<< ./src/components/Input/Input1.vue
<<< ./src/demos/Input1.vue [Demo.vue]

:::
