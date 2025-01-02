<script setup lang="ts">
import { ref } from "vue";
import Countdown from '../components/Countdown/Countdown.vue';

const endDate = ref(new Date(Date.now() + 3600000))
const accuracy = ref(4)
</script>

<template>
    <div class="p-3 mt-4">

        <p>Countdown ends in: </p>

        <div class="bg-gray-300 p-4 rounded font-medium text-gray-700">
            <Countdown :endDate="new Date(endDate)" :accuracy="accuracy" />
        </div>

        <p class="my-4">Select End Date: {{ new Date(endDate) }}</p>
        <input type="date" v-model="endDate" class="rounded  w-full p-4 ring-[2px] ring-gray-400" />

        <p>Select Accuracy</p>
        <select v-model.number="accuracy" class="appearance-auto p-4 w-full rounded">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
        <p>Accuracy controls if day, hour, minute or second should be shown, 1 = show the max time available only, and so on</p>
        <p>Example: An accuracy of 3 will will show days, hours minute, if days is not possible, it shows hour, minutes, second </p>

    </div>
</template>