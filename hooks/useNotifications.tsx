'use client'
import useSWR from 'swr'
// TODO: See Below
// import { sendNotification } from './useDesktopNotifications'

const fetcher = (apiURL: string) => fetch(apiURL).then(res => res.json())

export default function useNotifications() {
  const { data, error, isLoading } = useSWR('/api/notifications', fetcher, { 
    refreshInterval: 1000,
    onSuccess: (newData, key, config) => {
      console.log(newData)
      //
      // TODO: Send the notification for new updates
      // sendNotification('Example Title', {body: 'test'})
      //
    }
  })

  return { data, error, isLoading }
}

export function useUnreadCount() {
  const { data, error, isLoading } = useSWR('/api/notifications/unreadCount', fetcher)
  return { data, error, isLoading }
}