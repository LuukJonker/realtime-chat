import type { Timestamp } from 'firebase/firestore'

type UserId = string

export type User = {
  id: UserId
  displayName: string
  photoURL: string
}

type ChatId = string

export type Chat = {
  id: ChatId
  participants: UserId[]
  messages: Message[]
  groupchat: {
    name: string
    photoURL: string
    admins: UserId[]
  } | null
  createdAt: Timestamp
  updatedAt: Timestamp
}

type MessageId = string

export enum MessageState {
  SENT = 0,
  RECEIVED = 1,
  READ = 2
}

export type Message = {
  id: MessageId
  chatId: ChatId
  senderId: UserId
  content: string
  createdAt: Timestamp
  state: MessageState
}
