'use client'
import { createContext, useState, FC, PropsWithChildren } from "react"

export type LayoutState = {
  theme: string,
  showNotificationsPanel: boolean
}
const defaultState: LayoutState = {
  theme: 'dark',
  showNotificationsPanel: true
}

export type LayoutContextProps = {
  layout: LayoutState,
  setLayout: (layout: LayoutState) => void
  toggleTheme: () => void
  toggleNotificationsPanel: () => void
}
const defaultContext: LayoutContextProps = {
  layout: defaultState,
  setLayout: () => null,
  toggleTheme: () => null,
  toggleNotificationsPanel: () => null
}

// Create The Layout Context
export const LayoutContext = createContext<LayoutContextProps>(defaultContext)

// Create the Provider To Make The State Stored In Context Available To Children Components
const LayoutProvider: FC<PropsWithChildren> = ({children}) => {
  const [layout, setLayout] = useState<LayoutState>(defaultState)

  function toggleTheme() {
    if (layout.theme === 'dark') {
      setLayout(prev => ({...prev, theme: 'light'}))
    } else {
      setLayout(prev => ({...prev, theme: 'dark'}))
    }
  }

  function toggleNotificationsPanel() {
    console.log(layout.showNotificationsPanel + ': got here 0')
    if (layout.showNotificationsPanel === false) {
      console.log('got here 1')
      setLayout(prev => ({...prev, showNotificationsPanel: true}))
    } else {
      console.log('got here 2')
      setLayout(prev => ({...prev, showNotificationsPanel: false}))
    }
  }

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
        toggleTheme,
        toggleNotificationsPanel
      }}
    >
        {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider