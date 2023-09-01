<script setup lang="ts">
import UserList from '@/components/userCard/UserList.vue'
import ChatList from '@/components/contactCard/ChatList.vue'
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col flex-1 justify-between overflow-hidden">
    <div>
      <input
        v-model="search"
        type="text"
        placeholder="Search"
        class="p-2 mx-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"
      />

      <UserList v-if="search" :search="search" />
      <ChatList v-else />
    </div>

    <RouterLink
      to="/new/group"
      class="bg-primary rounded-lg text-xl transition-transform text-onLight p-4 text-center"
      :class="{
        'translate-y-0': !search,
        'translate-y-full': search
      }"
    >
      New groupchat
    </RouterLink>
  </div>
</template>
