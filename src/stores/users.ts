import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { getUsers } from "@/firebase/firestore";
import type { User } from "@/types/database";

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);

  onMounted(async () => {
    users.value = await getUsers();
  });

  return {
    users,
  };
});
