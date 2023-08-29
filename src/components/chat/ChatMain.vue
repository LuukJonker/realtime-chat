<script setup lang="ts">
import ChatDays from './ChatDays.vue'
import ChatInput from './ChatInput.vue'
import { useChatsStore } from '@/stores/chats'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import ChatToolbar from './ChatToolbar.vue'
import type { Message } from '@/types/database'

const props = defineProps<{
  chatId: string | undefined
}>()

const chatsStore = useChatsStore()
const { chats } = storeToRefs(chatsStore)

const chatBox = ref<HTMLElement | null>(null)

const chatScrollToBottom = (smooth: boolean = true) => {
  if (!chatBox.value) return

  chatBox.value.scroll({
    top: chatBox.value.scrollHeight,
    behavior: smooth ? 'smooth' : 'auto'
  })
}

const chat = computed(() => {
  const chat = chats.value.find((chat) => chat.id === props.chatId)
  return chat
})

const daysWithMessages = computed(() => {
  if (!chat.value?.messages) return []

  const days = new Set<string>()
  chat.value.messages.forEach((message) => {
    const date = message.createdAt.toDate()
    const day = date.toDateString()
    days.add(day)
  })

  return Array.from(days).map((day) => {
    if (!chat.value?.messages) return { day, messages: [] }

    const messages = chat.value.messages.filter((message) => {
      const messageDate = message.createdAt.toDate()
      return messageDate.toDateString() === day
    })

    return {
      day,
      messages: messages as Message[]
    }
  })
})
</script>

<template>
  <section class="flex flex-col h-full flex-1">
    <ChatToolbar v-if="chatId" :chat-id="chatId" />
    <div v-if="!chat" class="flex-1 flex justify-center items-center">
      <p class="text-2xl text-onDark">Select a chat to start messaging</p>
    </div>
    <div
      ref="chatBox"
      class="flex-1 overflow-y-auto flex flex-col-reverse p-1 gap-1"
      v-else-if="chat && chat.messages"
    >
      <ChatDays v-for="day in daysWithMessages" :key="day.day" :day-with-messages="day" />
    </div>
    <div v-else class="flex-1 flex justify-center items-center">
      <p class="text-2xl text-onDark">No messages yet</p>
    </div>
    <ChatInput v-if="chatId" :chat-id="chatId" :chat-scroll-to-bottom="chatScrollToBottom" />
  </section>
</template>
