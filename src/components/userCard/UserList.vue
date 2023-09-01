<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { useChatsStore } from '@/stores/chats'
import { computed } from 'vue'
import UserCard from './UserCard.vue'
import ChatCard from '../contactCard/ChatCard.vue'
import auth from '@/firebase/auth'
import { storeToRefs } from 'pinia'
import sortChats from '@/utils/sortChats'

const props = defineProps<{
  search: string
}>()

const usersStore = useUsersStore()
const chatsStore = useChatsStore()

const contacts = chatsStore.contacts

const { users } = storeToRefs(usersStore)
const { chats } = storeToRefs(chatsStore)

const searchedUsers = computed(() => {
  const search = props.search.toLowerCase()
  return users.value.filter((user) => {
    return user.displayName.toLowerCase().includes(search)
  })
})

const contactsUsers = computed(() => {
  return searchedUsers.value.filter((user) => {
    return contacts.has(user.id)
  })
})

const searchedChats = computed(() => {
  const contactsUsersSet = new Set(contactsUsers.value.map((user) => user.id))
  return sortChats(
    chats.value.filter((chat) => {
      return chat.participants.some((participant) => {
        return contactsUsersSet.has(participant)
      })
    })
  )
})

const nonContactsUsers = computed(() => {
  return searchedUsers.value.filter((user) => {
    if (user.id === auth.currentUser?.uid) return false
    return !contacts.has(user.id)
  })
})
</script>

<template>
  <div>
    <div class="flex flex-col gap-2 mx-2 mt-4">
      <h2 class="text-lg text-onDark emphasis-high">Chats</h2>
      <ChatCard v-for="chat in searchedChats" :key="chat.id" :chat="chat" />
      <div v-if="!searchedChats.length" class="flex-1 flex justify-center items-center">
        <p class="text-2xl">No chats found</p>
      </div>
    </div>
    <div class="flex flex-col gap-2 mx-2 mt-4">
      <h2 class="text-lg text-onDark emphasis-high">Users</h2>
      <UserCard v-for="user in nonContactsUsers" :key="user.id" :user="user" />
      <div v-if="!nonContactsUsers.length" class="flex-1 flex justify-center items-center">
        <p class="text-2xl">No users found</p>
      </div>
    </div>
  </div>
</template>
