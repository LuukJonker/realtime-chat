<script setup lang="ts">
import auth from '@/firebase/auth'
import type { User } from 'firebase/auth'
import ProfileSection from '@/components/ProfileSection.vue'
import UserSection from '@/components/UserSection.vue'
import ChatMain from '@/components/chat/ChatMain.vue'

defineProps<{
  chatId: string | undefined
}>()

const user = auth.currentUser as User
</script>

<template>
  <main class="flex h-full">
    <section class="w-80 bg-surface-100 h-full">
      <ProfileSection :user="user" />

      <UserSection />
    </section>
    <ChatMain v-if="chatId" :chatId="chatId" />
  </main>
</template>
