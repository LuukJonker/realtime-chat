<script setup lang="ts">
import type { User } from 'firebase/auth'
import ProfileIconImage from '@/assets/profile-icon.png'
import type { RouterLink } from 'vue-router'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="flex justify-between items-center bg-primary text-onLight p-2 m-2 rounded-lg">
    <div class="flex justify-start items-center gap-2">
      <img
        :src="user.photoURL ? user.photoURL : ProfileIconImage"
        alt="Profile"
        class="w-16 aspect-square object-cover rounded-full"
        referrerpolicy="no-referrer"
      />
      <h1 class="text-xl">{{ user.displayName }}</h1>
    </div>

    <RouterLink to="/settings" class="bg-primary text-onLight p-2 rounded-lg">Settings</RouterLink>
  </div>
</template>
