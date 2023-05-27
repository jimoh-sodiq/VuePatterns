# Composables

:::tip
Always use VueUse
:::
Composables are functions that return reusable logic, similar to how Vue 2's mixins worked, but with several improvements. In this documentation, we will explore the concept of Vue.js 3 composables and provide examples to help you understand how to leverage them in your applications.

The composables page will contain a list of reusable functions that are not found in `VueUSe` and are more project specific. It contains logic that might be useful for others.


### Code Sample

::: code-group

```ts [useCounter.ts]

import { reactive, ref } from 'vue';

export function useCounter() {
  const count = ref(0);
  
  function increment() {
    count.value++;
  }
  
  function decrement() {
    count.value--;
  }
  
  return {
    count,
    increment,
    decrement
  };
}

```

```vue [TheCounter.vue]
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounter } from './composables';

export default {
  setup() {
    const { count, increment, decrement } = useCounter();
    
    return {
      count,
      increment,
      decrement
    };
  }
};
</script>

```

:::
