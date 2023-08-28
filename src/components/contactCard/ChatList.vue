<script setup lang="ts">
import ContactCard from './ContactCard.vue'
import { useChatsStore } from '@/stores/chats'
import { storeToRefs } from 'pinia'

const chatsStore = useChatsStore()
const { chats } = storeToRefs(chatsStore)
</script>

<template>
  <div v-if="chats.length" class="flex-1 flex flex-col gap-2 mx-2 mt-4">
    <ContactCard v-for="chat in chats" :key="chat.id" :chat="chat" />
  </div>
</template>
