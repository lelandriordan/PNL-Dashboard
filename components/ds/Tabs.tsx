import { Tab } from '@headlessui/react'

export interface Tab {
  label: string
  onClick?: () => void
}
export interface TabsProps {
  // tabs: Array<Tab>
  tabs: Tab[]
}

function Tabs ({ tabs }: TabsProps) {
  const getTabClasses = (isSelected:boolean) => {
    const baseClasses = 'w-full py-2.5 text-sm font-semibold leading-5 border-b-2 border-primary-700 outline-none rounded-t-2xl'
    if (isSelected) {
      return `${baseClasses} text-primary-300 hover:bg-white/[0.05]`
    } else {
      return baseClasses
    }
  }
  return (
    <Tab.List className="flex">
      {tabs.map((tab:Tab) => (
        <Tab
          key={tab.label}
          className={({ selected }) => getTabClasses(selected)}
          onClick={tab.onClick}
        >
          {tab.label}
        </Tab>
      ))}
    </Tab.List>
  )
}

export default Tabs
