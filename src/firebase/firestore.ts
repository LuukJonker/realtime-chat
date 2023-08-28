import app from './config'
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  setDoc,
  getDoc,
  getDocs,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore'
import auth from './auth'
import type { Chat, Message, User } from '@/types/database'
import { v4 as uuidv4 } from 'uuid'

const db = getFirestore(app)

export const addUser = (uid: string, displayName: string, photoURL: string | null | undefined) => {
  const document = doc(db, 'users', uid)

  return setDoc(document, {
    displayName: displayName,
    photoURL: photoURL ? photoURL : null
  })
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
  const chatId = uuidv4()
  const document = doc(db, 'chats', chatId)

  await setDoc(document, {
    participants: participants,
    updatedAt: new Date(),
    createdAt: new Date()
  })

  return chatId
}

export const sendMessage = async (chatId: string, content: string) => {
  const messageId = uuidv4()
  const document = doc(db, 'chats', chatId, 'messages', messageId)

  const currentUser = auth.currentUser

  if (!currentUser) {
    throw new Error('User not found in sendMessage')
  }

  const chat = await setDoc(document, {
    chatId: chatId,
    senderId: currentUser.uid,
    content: content,
    createdAt: new Date(),
  })

  return chat
}

export const subscribeOnChats = (callback: (chats: Chat[]) => void) => {
  const coll = collection(db, 'chats')

  const currentUser = auth.currentUser

  if (!currentUser) {
    throw new Error('User not found in sendMessage')
  }

  const q = query(coll, where('participants', 'array-contains', currentUser.uid))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const chats = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    callback(chats as Chat[])
  })

  return unsubscribe
}

export const subscribeOnMessages = (chatId: string, callback: (messages: Message[]) => void) => {
  const coll = collection(db, 'chats', chatId, 'messages')
  const q = query(coll, orderBy('createdAt', 'asc'))

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })

    callback(messages as Message[])
  })

  return unsubscribe
}

export default db
