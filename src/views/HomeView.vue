<script setup lang="ts">
import auth, { onAuthStateChanged } from '@/firebase/auth'
import { ref } from 'vue'
import ChatView from './ChatView.vue'

defineProps<{
  chatId?: string
}>()

const user = ref(auth.currentUser)

onAuthStateChanged((newUser) => {
  user.value = newUser
})
</script>

<template>
  <ChatView v-if="user" :chatId="chatId" />

  <p v-else>Sign in to see your profile</p>
</template>
