<script setup lang="ts">
import { sendMessage } from '@/firebase/firestore'
import { watch, ref } from 'vue'
import { useInputMessagesStore } from '@/stores/inputMessages'

const props = defineProps<{
  chatId: string,
  chatScrollToBottom: () => void
}>()

const { addInputMessage, removeInputMessage, getInputMessage } = useInputMessagesStore()

const message = ref('')

watch(
  () => props.chatId,
  () => {
    message.value = getInputMessage(props.chatId)
  }
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  addInputMessage(props.chatId, target.value)
  message.value = target.value
}

const send = async () => {
  const content = message.value.trim()
  if (!content) return

  const promise = sendMessage(props.chatId, content)
  message.value = ''
  removeInputMessage(props.chatId)
  await promise

  // Wait for the message to be added to the chat
  props.chatScrollToBottom()
}
</script>

<template>
  <div class="flex w-full bg-surface-200 p-2">
    <form class="flex-1 flex" @submit.prevent="send">
      <input
        type="text"
        class="flex-1 p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-300"
        placeholder="Type a message..."
        :value="message"
        @input="handleInput"
      />
      <button
        type="submit"
        class="bg-primary rounded-full w-16 p-2 mx-2 h-10 flex justify-center items-center text-onLight"
      >
        Send
      </button>
    </form>
  </div>
</template>
