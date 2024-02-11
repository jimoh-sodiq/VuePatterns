---
outline: deep
---

<script setup>
import Radio1 from '../../src/demos/Radio1.vue'
import Radio2 from '../../src/demos/Radio2.vue'

</script>

# Radio Input

This page Show an Example of a Reusable Checkbox Input Component.

## First Pattern

### Demo

<Radio1 />

## Second Pattern

### Demo

This is an update to the previous pattern. in this pattern the vue defineModel macro is used to easily manage two way model bindings between the parent and child components.

<Radio2 />

### Dependencies

```
{
    "tailwindcss": "^3.3.2", // for styling
}
```

### Code

::: code-group

<<< ./src/components/Radio/Radio1.vue
<<< ./src/demos/Radio1.vue [Demo1.vue]
<<< ./src/components/Radio/Radio2.vue
<<< ./src/demos/Radio2.vue [Demo2.vue]
:::
