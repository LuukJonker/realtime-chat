export function formatTime(date: Date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${hoursString}:${minutesString}`
}

export function formatChatTime(date: Date) {
  const now = new Date()
  const yesterday = new Date(now.getTime() - 86400000)
  const isToday = date.getDate() === now.getDate()
  const isYesterday = date.getDate() === yesterday.getDate()

  if (isToday) {
    return formatTime(date)
  } else if (isYesterday) {
    return "Yesterday"
  } else {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}