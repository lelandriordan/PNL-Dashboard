import clsx from "clsx"

export interface ButtonProps {
  children: React.ReactNode
  variant: 'buy' | 'sell' | 'default' | 'basic'
  size?: 'sm' | 'md' | 'lg',
  className: string
  onClick?: () => void
}

function Button({children, variant, size, className, onClick}: ButtonProps) {
  const baseClasses = 'rounded shadow text-slate-100 text-center hover:cursor-pointer'
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2',
    lg: 'px-4 py-3'
  }
  const variantClasses = {
    default: 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-700',
    buy: 'bg-green-500 dark:bg-green-600 hover:bg-green-700',
    sell: 'bg-red-500 dark:bg-red-600 hover:bg-red-700',
    basic: 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-700'
  }

  return (
    <div onClick={onClick} className={clsx(
      baseClasses,
      sizeClasses[size ?? 'md'],
      variantClasses[variant ?? 'default'],
      className && className
    )}>
      {children}
    </div>
  )
}

export default Button