'use client'
import { useEffect } from "react"
import { BellIcon } from "@heroicons/react/24/outline"
import useLayoutContext from "@/hooks/useLayoutContext"

function NotificationIndicator() {
  const {layout, setLayout, toggleNotificationsPanel} = useLayoutContext()
  // TODO
  const unread = 1

  return (
    <button
      type="button"
      onClick={() => toggleNotificationsPanel()}
      className="relative inline-flex items-center text-sm font-medium text-center p-1 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white dark:text-slate-300"
    >
      <BellIcon className="w-6 h-6" />
      <span className="sr-only">Notifications</span>
      {unread > 0 ?
        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
          {unread} {layout.showNotificationsPanel}
        </div>
      : null}
    </button>
  )
}

export default NotificationIndicator
