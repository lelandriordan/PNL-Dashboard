'use client'
import './globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import NotificationsPanel from '@/components/NotificationsPanel'
import LayoutProvider from '@/context/LayoutContext'
import useLayoutContext from '@/hooks/useLayoutContext'

// Next Google Fonts
const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({children}: RootLayoutProps) {
  const {layout, setLayout, toggleNotificationsPanel} = useLayoutContext()

  return (
    <html>
      <body className={clsx(
        inter.className,
        'bg-blue-100 dark:bg-slate-900'
      )}>
        <LayoutProvider>
          <div className='flex flex-col h-screen overflow-hidden dark'>
            <Header />
            <main className="flex flex-row">
              <div className="grow">
                {children}
              </div>
              {layout.showNotificationsPanel ? 
                <NotificationsPanel className="flex flex-col" />
              : null}
            </main>
          </div>
        </LayoutProvider>
      </body>
    </html>
  )
}

export default RootLayout
