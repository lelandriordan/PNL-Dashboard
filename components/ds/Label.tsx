import clsx from "clsx"

export interface LabelProps {
  children: React.ReactNode
  className?: string
}

function Label({children, className}: LabelProps) {
  return (
    <div className={clsx(
      'font-semibold text-xs uppercase text-slate-600 dark:text-indigo-300',
      className && className
    )}>
      {children}
    </div>
  )
}

export default Label