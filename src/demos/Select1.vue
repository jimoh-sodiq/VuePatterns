<script setup lang="ts">
import { ref } from "vue";
import Select from "../components/Select/Select1.vue";

const country = ref("");
</script>

<template>
    <div class="p-3 mt-4">
        <p>Country is: {{ name }}</p>
        <div>
            <p class="italic text-xs font-medium uppercase">Normal Mode</p>
            <Select>
                <option>Nigeria</option>
                <option>Cameroon</option>
                <option>Ghana</option>
            </Select>
        </div>
        <div>
            <p class="italic text-xs font-medium uppercase">With option group</p>
            <Select>
                <option>Hello there</option>
            </Select>
        </div>
    </div>
</template>
