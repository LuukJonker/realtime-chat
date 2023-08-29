import { defineStore } from "pinia";
import { ref } from "vue";
import { subscribeOnUsers } from "@/firebase/firestore";
import type { User } from "@/types/database";

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);

  subscribeOnUsers((u) => {
    users.value = u;
  });

  return {
    users,
  };
});
