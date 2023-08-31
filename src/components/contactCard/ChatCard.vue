<script setup lang="ts">
import type { Chat } from '@/types/database'
import ProfileIconImage from '@/assets/profile-icon.png'
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import auth from '@/firebase/auth'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  chat: Chat
}>()

const usersStore = useUsersStore()

const comp = computed(() => {
  if (props.chat.groupchat) {
    return { displayName: props.chat.groupchat.name, photoURL: props.chat.groupchat.photoURL }
  }

  const currentUserId = auth.currentUser?.uid
  const otherUserId = props.chat.participants.find((id) => id !== currentUserId)

  const user = usersStore.users.find((user) => user.id === otherUserId)
  return user ?? {}
})

const message = computed(() => {
  return props.chat.messages?.at(0)
})
</script>

<template>
  <RouterLink
    :to="`/${chat.id}`"
    class="flex items-center rounded-lg p-2 gap-4 bg-surface-400 hover:bg-surface-500"
    v-if="$props.chat.messages"
  >
    <img
      :src="comp.photoURL ? comp.photoURL : ProfileIconImage"
      alt="Profile"
      height="64"
      width="64"
      class="w-16 aspect-square rounded-full object-cover"
      referrerpolicy="no-referrer"
    />
    <div class="flex flex-col gap-[2px] max-w-full w-full">
      <h2 class="text-lg text-onDark">{{ comp.displayName }}</h2>
      <div class="flex w-full max-w-full items-center justify-between">
        <p v-if="message" class="text-onDark emphasis-high whitespace-nowrap overflow-ellipsis overflow-hidden">
          {{ message.content }}
        </p>
        <div v-else class="text-onDark emphasis-high animate-pulse h-4 w-32" />

        <p class="">
          Read
        </p>
      </div>
    </div>
  </RouterLink>
</template>
