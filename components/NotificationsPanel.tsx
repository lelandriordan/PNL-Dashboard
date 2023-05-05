'use client'
import clsx from "clsx"
import Notification from "@/components/Notification"
import Label from "@/components/ds/Label"
import useNotifications from "@/hooks/useNotifications"
import { NotificationProps } from "@/components/Notification"
import LoadingSpinner from "./ds/LoadingSpinner"
import Button from "./ds/Button"
import {
  requestPermission,
  isSubscribed
} from "@/hooks/useDesktopNotifications"

export interface NotificationsPanelProps {
  className?: string
}

function NotificationsPanel({className}: NotificationsPanelProps) {
  const {data, error, isLoading} = useNotifications()

  const handleClick = () => {
    requestPermission();
  }

  return (
    <div className={clsx('bg-white dark:bg-slate-800/60 pt-2 shadow-inner w-[200px]', className && className)}>
      {
        (isLoading) ? <></> :
        (error) ? <p>Error</p> :
        <>
          <Label className="px-2 pt-2 pb-3">Notifications</Label>
          <div>
            {data.map((note: NotificationProps, index: number) => (
              <Notification
                key={index + '-notification'}
                sender={note.sender}
                content={note.content}
                date={note.date}
              />
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-[200px] p-3 flex flex-col gap-2 bg-slate-800 shadow text-center">
            <div className="text-slate-300">Never miss a message!</div>
            <div className="text-sm pb-1 text-slate-400">Subscribe to notifications on your desktop.</div>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => handleClick()}
                className="w-full"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default NotificationsPanel