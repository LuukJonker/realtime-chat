import app from './config'
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
  orderBy,
  limit,
  onSnapshot,
  addDoc
} from 'firebase/firestore'
import auth from './auth'
import type { Chat, Message, User } from '@/types/database'
import { useChatsStore } from '@/stores/chats'

const db = getFirestore(app)

export type UpdateUserParams = {
  displayName?: string
  photoURL?: string | null
}

export const createUser = (uid: string, displayName?: string, photoURL?: string | null) => {
  const document = doc(db, 'users', uid)

  return setDoc(document, {
    displayName: displayName ?? '',
    photoURL: photoURL ?? null
  })
}

export const updateUser = (uid: string, params: UpdateUserParams) => {
  const document = doc(db, 'users', uid)

  return setDoc(document, params, { merge: true })
}

export const getChats = async () => {
  const coll = collection(db, 'chats')
  const q = query(coll, where('participants', 'array-contains', ''))
  const ordered = query(q, orderBy('updatedAt', 'desc'))

  const querySnapshot = await getDocs(ordered)
  const chats = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return chats as Chat[]
}

export const getMessages = async (chatId: string) => {
  const coll = collection(db, 'chats', chatId, 'messages')
  const q = query(coll, orderBy('createdAt', 'asc'), limit(50))

  const querySnapshot = await getDocs(q)
  const messages = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return messages as Message[]
}

export const getUsers = async () => {
  const coll = collection(db, 'users')
  const querySnapshot = await getDocs(coll)
  const users = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return users as User[]
}

export const startChat = async (participants: string[]) => {
  const { chats, subscribe } = useChatsStore()

  // Check if the chat already exists, only for 1:1 chats.
  const existingChat = chats.find((chat) => {
    return (
      !chat.groupchat &&
      chat.participants.every((participant) => {
        return participants.includes(participant)
      })
    )
  })

  if (existingChat) {
    return existingChat.id
  }

  const coll = collection(db, 'chats')

  const doc = await addDoc(coll, {
    participants: participants,
    updatedAt: new Date(),
    createdAt: new Date()
  })

  // Subscribe to the new chat after it's created in the backend.
  // Otherwise, permissions will be denied.
  subscribe(doc.id)

  return doc.id
}

export const sendMessage = async (chatId: string, content: string) => {
  const coll = collection(db, 'chats', chatId, 'messages')

  const currentUser = auth.currentUser

  if (!currentUser) {
    throw new Error('User not found in sendMessage')
  }

  const chat = await addDoc(coll, {
    chatId: chatId,
    senderId: currentUser.uid,
    content: content,
    createdAt: new Date()
  })

  return chat
}

export const subscribeOnUsers = (callback: (users: User[]) => void) => {
  const coll = collection(db, 'users')

  const unsubscribe = onSnapshot(coll, (querySnapshot) => {
    const users = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    callback(users as User[])
  })

  return unsubscribe
}

type Source = 'local' | 'server'
type ChatCallbackParams = { chats: Chat[]; source: Source }

export const subscribeOnChats = (callback: (params: ChatCallbackParams) => void) => {
  const currentUser = auth.currentUser

  if (!currentUser) {
    throw new Error('User not found in sendMessage')
  }

  const coll = collection(db, 'chats')
  const q = query(coll, where('participants', 'array-contains', currentUser.uid))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const source = querySnapshot.metadata.hasPendingWrites ? 'local' : 'server'

    const chats = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    callback({ chats: chats as Chat[], source })
  })

  return unsubscribe
}

type MessageCallbackParams = { messages: Message[]; source: Source }

export const subscribeOnMessages = (
  chatId: string,
  callback: (params: MessageCallbackParams) => void
) => {
  const coll = collection(db, 'chats', chatId, 'messages')
  const q = query(coll, orderBy('createdAt', 'desc'))

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const source = querySnapshot.metadata.hasPendingWrites ? 'local' : 'server'

    const messages = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    callback({ messages: messages as Message[], source })
  })

  return unsubscribe
}

export default db
