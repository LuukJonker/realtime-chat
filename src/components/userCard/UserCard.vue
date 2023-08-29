<script setup lang="ts">
import type { User } from '@/types/database'
import ProfileIconImage from '@/assets/profile-icon.png'
import { startChat } from '@/firebase/firestore'
import auth from '@/firebase/auth'
import router from '@/router'

const props = defineProps<{
  user: User
}>()

const user = props.user

const handleClick = async () => {
  if (!auth.currentUser) return
  const chatId = await startChat([user.id, auth.currentUser?.uid])
  router.push(`/${chatId}`)
}
</script>

<template>
  <button @click="handleClick" class="flex gap-4 p-4 rounded-lg items-center bg-surface-200">
    <img
      :src="user.photoURL ? user.photoURL : ProfileIconImage"
      alt="Profile"
      height="64"
      width="64"
      class="w-16 aspect-square rounded-full object-cover"
      referrerpolicy="no-referrer"
    />
    <div class="flex flex-col gap-2">
      <h2>{{ user.displayName }}</h2>
    </div>
  </button>
</template>
