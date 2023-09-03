<script setup lang="ts">
import ChatCard from './ChatCard.vue'
import { useChatsStore } from '@/stores/chats'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import sortChats from '@/utils/sortChats'

const chatsStore = useChatsStore()
const { chats } = storeToRefs(chatsStore)

const sortedChats = computed(() => sortChats(chats.value))
</script>

<template>
  <div
    v-if="chats.length"
    class="flex flex-col gap-4 ml-2 pr-2 mt-4 overflow-y-auto overflow-x-hidden"
  >
    <ChatCard v-for="chat in sortedChats" :key="chat.id" :chat="chat" />
  </div>
</template>
