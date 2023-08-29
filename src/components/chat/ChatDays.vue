<script setup lang="ts">
import type { Message } from '@/types/database'
import ChatMessage from '@/components/chat/ChatMessage.vue'

defineProps<{
  dayWithMessages: {
    day: string
    messages: Message[]
  }
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-center items-center">
      <p class="text-center text-onDark text-sm bg-surface-300 p-2 rounded-lg">{{ dayWithMessages.day }}</p>
    </div>
    <div class="flex flex-col-reverse">
      <ChatMessage
        v-for="(message, index) in dayWithMessages.messages"
        :key="message.id"
        :all-messages="dayWithMessages.messages"
        :index="index"
        :message="message"
      />
    </div>
  </div>
</template>
