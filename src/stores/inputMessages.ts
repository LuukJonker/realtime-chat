import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputMessagesStore = defineStore('inputMessages', () => {
  const inputMessages = ref<Map<string, string>>(new Map())

  function addInputMessage(id: string, message: string) {
    inputMessages.value.set(id, message)
  }

  function removeInputMessage(id: string) {
    inputMessages.value.delete(id)
  }

  function getInputMessage(id: string) {
    return inputMessages.value.get(id) ?? ''
  }

  return {
    inputMessages,
    addInputMessage,
    removeInputMessage,
    getInputMessage
  }
})
