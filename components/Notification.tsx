export interface NotificationProps {
  sender: string
  content: React.ReactNode
  date: string
}

function Notification({sender, content, date}: NotificationProps) {
  return (
    <div className="flex flex-col gap-1 p-2 border-t border-slate-200 min-w-[200px] dark:border-slate-500 hover:dark:bg-slate-700">
      <div className="text-xs font-semibold uppercase">
        <div className="text-slate-500 dark:text-slate-400">{sender}</div>
      </div>
      <div className="text-slate-600 text-sm dark:text-slate-300">{content}</div>
      <div className="text-xs font-light text-slate-400">{date}</div>
    </div>
  )
}

export default Notification