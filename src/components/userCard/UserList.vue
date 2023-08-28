<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { useChatsStore } from '@/stores/chats'
import { computed } from 'vue'
import UserCard from './UserCard.vue'
import ContactCard from '../contactCard/ContactCard.vue'
import type { Chat } from '@/types'
import auth from '@/firebase/auth'

const props = defineProps<{
  search: string
}>()

const usersStore = useUsersStore()
const chatsStore = useChatsStore()

const contacts = chatsStore.contacts

const searchedUsers = computed(() => {
  const search = props.search.toLowerCase()
  return usersStore.users.filter((user) => {
    return user.displayName.toLowerCase().includes(search)
  })
})

const contactsUsers = computed(() => {
  return searchedUsers.value.filter((user) => {
    return contacts.has(user.id)
  })
})

const nonContactsUsers = computed(() => {
  return searchedUsers.value.filter((user) => {
    if (user.id === auth.currentUser?.uid) return false
    return !contacts.has(user.id)
  })
})
</script>

<template>
  <div v-if="searchedUsers" class="flex-1 flex flex-col gap-2 mx-2 mt-4">
    <UserCard v-for="user in nonContactsUsers" :key="user.id" :user="user" />
  </div>
  <div v-else class="flex-1 flex justify-center items-center">
    <p class="text-2xl">No users found</p>
  </div>
</template>
