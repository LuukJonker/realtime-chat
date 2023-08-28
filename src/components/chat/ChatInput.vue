<script setup lang="ts">
import { sendMessage } from '@/firebase/firestore';
import { ref } from 'vue'

const props = defineProps<{
  chatId: string
}>()

const message = ref('')

const send = async () => {
  const promise = sendMessage(props.chatId, message.value)
  message.value = ''
  await promise
}
</script>

<template>
  <div class="flex w-full bg-surface-200 p-2">
    <form class="flex-1 flex" @submit.prevent="send">
      <input
        type="text"
        class="flex-1 p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-300"
        placeholder="Type a message..."
        v-model="message"
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
