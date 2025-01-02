<script setup lang="ts">
import { ref } from "vue";
import RandomSelector from '../components/RandomSelector/RandomSelector.vue';

const selectedWinner = ref()

const names = ['Jimoh', 'Ayomide', 'Hikmah', 'Abdul', 'Jeff', 'Ade', 'Adekunle', 'Joe', 'Kromate', 'Aji']
</script>

<template>
    <div class="p-3 mt-4">
        <p class="my-4">Selected winner: {{ selectedWinner }}</p>

        <RandomSelector :nameList="names" v-model="selectedWinner" buttonText="Choose Winner" />
    </div>
</template>