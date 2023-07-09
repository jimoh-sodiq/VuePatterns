<template>
  <div>
    <main>
      <p>
        This is a demo for a composable that helps in handling applications with multiple tables
      </p>

      <!-- demo here -->
      <section class="w-full overflow-x-hidden">
        <div class="w-full overflow-x-auto">
          <table>
            <thead class="">
              <th>
                <input
                  :value="allRowsSelected"
                  :checked="isSelectedAvailable || allRowsSelected"
                  @input.prevent="toggleRowSelection"
                  type="checkbox"
                  class="w-4 h-4"
                />
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Role</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr
                v-for="user in userDataList"
                :key="user.id"
                class="h-full cursor-pointer hover:bg-slate-100 transition-colors duration-200"
              >
                <td>
                  <input
                    v-model="selectedRows"
                    :value="user"
                    type="checkbox"
                    class="w-4 h-4"
                  />
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.address }}</td>
                <td>{{ user.role }}</td>
                <td>
                  <select>
                    <option>Edit</option>
                    <option>Delete</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex gap-x-3">
          <button class="rounded bg-gray-400 p-1.5 text-sm text-white" @click="clearSelectedRows">Clear Selection</button>
          <button class="rounded bg-gray-400 p-1.5 text-sm text-white" @click="selectAllRows">Select All Rows</button>
          <button class="rounded bg-gray-400 p-1.5 text-sm text-white" @click="deleteLastRow">Delete Last Row</button>
        </div>
        <h2 class="my-4">Selected Rows here:</h2>
        <pre class="text-xs md:text-base"> {{ selectedRows }}</pre>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTableSelection } from "../composables/useTableSelection";
interface User {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  role: "Admin" | "User";
}

const userDataList = ref<User[]>([
  {
    id: "1",
    name: "jimoh sodiq Adewale",
    phone: "+23412345678",
    address: "Nigeria, Lagos 1123, address",
    role: "Admin",
  },
  {
    id: "2",
    name: "jimoh sodiq Adewale",
    phone: "+23412345678",
    address: "Nigeria, Lagos 1123, address",
    role: "Admin",
  },
  {
    id: "3",
    name: "jimoh sodiq Adewale",
    phone: "+23412345678",
    address: "Nigeria, Lagos 1123, address",
    role: "Admin",
  },
  {
    id: "4",
    name: "jimoh sodiq Adewale",
    phone: "+23412345678",
    address: "Nigeria, Lagos 1123, address",
    role: "Admin",
  },
  {
    id: "5",
    name: "jimoh sodiq Adewale",
    phone: "+23412345678",
    address: "Nigeria, Lagos 1123, address",
    role: "Admin",
  },
]);

function deleteLastRow() {
  userDataList.value.pop();
}

const {
  selectedRows,
  toggleRowSelection,
  selectAllRows,
  isSelectedAvailable,
  allRowsSelected,
  clearSelectedRows,
} = useTableSelection(userDataList);
</script>

<style scoped>
th {
  @apply font-semibold text-sm py-6 px-3;
}
td {
  @apply text-xs px-3;
}
</style>
