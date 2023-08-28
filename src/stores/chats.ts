import auth from '@/firebase/auth'
import { subscribeOnChats, subscribeOnMessages } from '@/firebase/firestore'
import type { Chat } from '@/types/database'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useChatsStore = defineStore('chats', () => {
  const chats = ref<Chat[]>([])

  const subscribed = new Set<string>()

  subscribeOnChats((c) => {
    chats.value = c

    c.forEach((chat) => {
      if (subscribed.has(chat.id)) {
        return
      }

      subscribeOnMessages(chat.id, (messages) => {
        chats.value = chats.value.map((c) => {
          if (c.id === chat.id) {
            c.messages = messages
          }

          return c
        })
      })

      subscribed.add(chat.id)
    })
  })

  const contacts = computed(() => {
    const contacts = new Set<string>()

    chats.value.forEach((chat) => {
      chat.participants.forEach((participant) => {
        if (participant !== auth.currentUser?.uid) {
          contacts.add(participant)
        }
      })
    })

    return contacts
  })

  return {
    chats,
    contacts
  }
})
