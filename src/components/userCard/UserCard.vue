<script setup lang="ts">
import type { User } from '@/types/database'
import ProfileIconImage from '@/assets/profile-icon.png'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  user: User
}>()

const user = props.user
</script>

<template>
  <RouterLink :to="`/${user.id}`" class="flex gap-4 p-4 rounded-lg items-center bg-surface-200">
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
  </RouterLink>
</template>
