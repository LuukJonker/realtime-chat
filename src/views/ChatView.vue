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
    <section
      class="bg-surface-100 h-full"
      :class="{
        'w-full md:w-80': !chatId,
        'hidden md:w-80 md:inline': chatId
      }"
    >
      <ProfileSection :user="user" />

      <UserSection />
    </section>
    <ChatMain
      :chatId="chatId"
      :class="{
        'hidden md:flex': !chatId,
        '': chatId
      }"
    />
  </main>
</template>
