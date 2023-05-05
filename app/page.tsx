'use client'
import DataTile from '@/components/ds/DataTile'
import PerformanceWidget from '@/components/PerformanceWidget'
import ProfitWidget from '@/components/ProfitWidget'
import HoldingsWidget from '@/components/HoldingsWidget'
import TotalValueWidget from '@/components/TotalValueWidget'
import usePortfolio from '@/hooks/usePortfolio'

export default function Home() {
  const { portfolio, error, isLoading } = usePortfolio()

  if (isLoading || error) return <></>
  return (
    <div
      className="
      h-screen
      min-h-screen
      grid
      grid-cols-3
      grid-rows-[70px_300px_auto_minmax(min-content,max-content)]
      gap-3
      p-3
      pb-10
      overflow-auto"
    >
      <div className="col-span-3 flex items-center gap-6">
        <h2 className="text-slate-600 font-bold text-3xl mr-auto dark:text-slate-300">{portfolio.name}</h2>
        <DataTile
          title="Total Value (USD)"
          value={'$123,000.23'}
        />
        <DataTile
          title="1D Performance"
          value={'-1.3%'}
        />
        <DataTile
          title="1M Performance"
          value={'9.3%'}
        />
      </div>
      <TotalValueWidget className="col-span-1" />
      <PerformanceWidget className="col-span-1" />
      <ProfitWidget className="col-span-1" />
      <HoldingsWidget className="col-span-3" />
    </div>
  )
}
