<script setup lang="ts">
import UserList from '@/components/userCard/UserList.vue'
import ChatList from '@/components/contactCard/ChatList.vue'
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <input
    v-model="search"
    type="text"
    placeholder="Search"
    class="p-2 mx-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
  />

  <UserList v-if="search" :search="search" />
  <ChatList v-else />
</template>
