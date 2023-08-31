<script setup lang="ts">
import type { Message } from '@/types/database'
import auth from '@/firebase/auth'

const currentUser = auth.currentUser

const props = defineProps<{
  message: Message
  index: number
  allMessages: Message[]
}>()

const formatTime = (date: Date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${hoursString}:${minutesString}`
}

const checkIfFarApart = (index: number) => {
  if (index === props.allMessages.length - 1) return false

  const maxApart = 1000 * 60 * 5

  const message = props.message
  const prevMessage = props.allMessages[index + 1]

  if (message.senderId !== prevMessage.senderId) return false

  return message.createdAt.toDate().getTime() - prevMessage.createdAt.toDate().getTime() > maxApart
}
</script>

<template>
  <div
    class="flex flex-row-reverse p-2 rounded-lg mt-1 flex-wrap-reverse max-w-[70%]"
    :class="{
      'self-end items-start bg-primary text-onLight': message.senderId === currentUser?.uid,
      'self-start items-start bg-surface-400 text-onDark': message.senderId !== currentUser?.uid,
      'mt-2': checkIfFarApart(index)
    }"
  >
    <p class="text-xs emphasis-low justify-self-end ml-2">
      {{ formatTime(message.createdAt.toDate()) }}
    </p>
    <p class="max-w-full break-words">{{ message.content }}</p>
  </div>
</template>
