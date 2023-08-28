<script setup lang="ts">
import type { Message } from '@/types/database'
import auth from '@/firebase/auth'

const currentUser = auth.currentUser

defineProps<{
  message: Message
}>()

const formatTime = (date: Date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${hoursString}:${minutesString}`
}
</script>

<template>
  <div
    class="flex flex-col gap-1 p-2 rounded-lg w-80"
    :class="{
      'self-end items-end bg-primary text-onLight': message.senderId === currentUser?.uid,
      'self-start items-start bg-surface-400 text-onDark': message.senderId !== currentUser?.uid
    }"
  >
    <p>{{ message.content }}</p>
    <p class="text-xs emphasis-low">{{ formatTime(message.createdAt.toDate()) }}</p>
  </div>
</template>
