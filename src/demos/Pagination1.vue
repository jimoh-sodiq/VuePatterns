<script setup lang="ts">
import { ref } from "vue";
import Pagination1 from "../components/Pagination/Pagination1.vue";

const currentPage = ref(1)
const totalPages = ref(30)
const pageSize = ref(50)
</script>

<template>
    <div>
        <div class="flex items-center gap-5 text-sm">
            <p>Current Page: </p><input type="number" :min="1" :max="totalPages" v-model="currentPage"
                class="w-[200px] ring-[1px] ring-green-500 rounded px-2 py-1" />
        </div>
        <div class="flex items-center gap-5 text-sm">
            <p>Total Page: </p><input type="number" :min="1" v-model="totalPages"
                class="w-[200px] ring-[1px] ring-green-500 rounded px-2 py-1" />
        </div>
        <div class="mx-auto w-fit mt-5">
            <Pagination1 @changePage="(page) => currentPage = page" :currentPage="currentPage" :pageSize="pageSize"
                :totalPages="totalPages" />
        </div>
    </div>
</template>