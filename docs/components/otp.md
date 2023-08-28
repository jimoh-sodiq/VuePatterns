---
outline: deep
---

<script setup>
import Otp1 from '../../src/demos/Otp1.vue'

</script>

# OTP Component

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

<Otp1 />

### Code

::: code-group

<<< ./src/components/Otp/Otp1.vue
<<< ./src/demos/Otp1.vue [Demo.vue]

:::
