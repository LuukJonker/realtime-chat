<script setup lang="ts">
import auth from '@/firebase/auth'
import type { User } from 'firebase/auth'
import ProfileSection from '@/components/ProfileSection.vue'
import UserSection from '@/components/UserSection.vue'
import ChatMain from '@/components/chat/ChatMain.vue'

defineProps<{
  newGroup?: boolean
  chatId?: string
}>()

const user = auth.currentUser as User
</script>

<template>
  <main class="flex h-full">
    <section
      class="bg-surface-100 h-full flex flex-col items-stretch"
      :class="{
        'w-full md:w-80': !chatId,
        'hidden md:w-80 md:flex': chatId
      }"
    >
      <ProfileSection :user="user" />

      <UserSection />
    </section>
    <div v-if="newGroup">
      <h1>New group</h1>
    </div>
    <ChatMain
      v-else
      :chatId="chatId"
      :class="{
        'hidden md:flex': !chatId,
        '': chatId
      }"
    />
  </main>
</template>
