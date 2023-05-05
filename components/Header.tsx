import clsx from 'clsx'
import Logo from '@/components/ds/Logo'
import NotificationIndicator from './NotificationIndicator'
import useLayoutContext from '@/hooks/useLayoutContext'

export interface HeaderProps {
  className?: string
}

function Header({className}: HeaderProps) {
  return (
    <div
      className={clsx(
      'flex justify-between items-end bg-white shadow-xl py-2 px-3 z-10 dark:bg-slate-800/70',
      className && className
    )}>
      <Logo />
      <NotificationIndicator />
    </div>
  )
}

export default Header