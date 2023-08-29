<script setup lang="ts">
import router from '@/router'
import { useChatsStore } from '@/stores/chats'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import auth from '@/firebase/auth'
import ProfileIconImage from '@/assets/profile-icon.png'

const props = defineProps<{
  chatId: string | undefined
}>()

const chatsStore = useChatsStore()
const { chats } = storeToRefs(chatsStore)

const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)

const chat = computed(() => {
  const chat = chats.value.find((chat) => chat.id === props.chatId)
  return chat
})

const comp = computed(() => {
  if (!chat.value) return { displayName: '', photoURL: '' }

  if (chat.value.groupchat) {
    return { displayName: chat.value.groupchat.name, photoURL: chat.value.groupchat.photoURL }
  }

  const currentUserId = auth.currentUser?.uid
  const otherUserId = chat.value.participants.find((id) => id !== currentUserId)

  const user = usersStore.users.find((user) => user.id === otherUserId)
  return user ?? { displayName: '', photoURL: '' }
})

const handleGoBack = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <header class="w-full bg-surface-200 flex items-center justify-between text-onDark">
    <div class="flex">
      <button class="p-2 rounded-full emphasis-high" @click="handleGoBack">
        <svg
          class="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L6.41421 10L10.7071 14.2929C11.0976 14.6834 11.0976 15.3166 10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex gap-2 items-center">
      <img
        :src="comp.photoURL ? comp.photoURL : ProfileIconImage"
        alt="Profile"
        height="32"
        width="32"
        class="w-8 h-8 aspect-square rounded-full object-cover"
        referrerpolicy="no-referrer"
      />
      <h1 class="text-2xl">{{ comp.displayName }}</h1>
    </div>
    <div></div>
  </header>
</template>
