<script setup lang="ts">
import ChatMessage from './ChatMessage.vue'
import ChatInput from './ChatInput.vue'
import { useChatsStore } from '@/stores/chats'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps<{
  chatId: string
}>()

const chatsStore = useChatsStore()
const { chats } = storeToRefs(chatsStore)

const chat = computed(() => {
  const chat = chats.value.find((chat) => chat.id === props.chatId)
  return chat
})
</script>

<template>
  <section class="flex flex-col h-full flex-1">
    <div class="flex-1 overflow-y-auto flex flex-col p-1 gap-1" v-if="chat && chat.messages">
      <ChatMessage v-for="message in chat.messages" :key="message.id" :message="message" />
    </div>
    <div v-else class="flex-1 flex justify-center items-center">
      <p class="text-2xl text-onDark">No messages yet</p>
    </div>
    <ChatInput :chat-id="chatId" />
  </section>
</template>
