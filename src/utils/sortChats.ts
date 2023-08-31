import type { Chat } from '@/types/database'

export default function sortChats(chats: Chat[]): Chat[] {
  return chats.sort((a, b) => {
    if (!a.messages?.length) return 1
    if (!b.messages?.length) return -1

    return b.messages[0].createdAt.seconds - a.messages[0].createdAt.seconds
  })
}
