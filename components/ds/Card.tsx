import clsx from "clsx"
import Label from "@/components/ds/Label"

export interface CardProps {
  children: React.ReactNode
  title?: string
  className?: string
  onClick?: () => void
}

function Card({children, title, className, onClick}: CardProps) {
  return (
    <div className={clsx(
      'bg-white rounded shadow p-2 dark:bg-slate-800/50',
      className && className
    )}>
      { title && <Label>{title}</Label>}
      {children}
    </div>
  )
}

export default Card