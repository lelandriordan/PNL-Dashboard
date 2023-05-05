'use client'
import clsx from 'clsx'
import BarChart from '@/components/BarChart'
import Card from '@/components/ds/Card'
import { BarProps } from '@/components/BarChart'
import { ReferenceLine } from 'recharts'
import { useStatPnl1M } from '@/hooks/useStatistics'
import LoadingSpinner from './ds/LoadingSpinner'

export interface ProfitWidgetProps {
  className?: string
}

function ProfitWidget({className}: ProfitWidgetProps) {
  const {data, error, isLoading} = useStatPnl1M()

  const bars: BarProps[] = [{
    type: 'monotone',
    fill: '#0ea5e9',
    dataKey: 'return'
  }]

  if (isLoading) return <LoadingSpinner />
  if (error) return <p>Error</p>
  return (
    <Card title="1M PNL" className={clsx('grow', className && className)}>
      <BarChart bars={bars} data={data}>
        <ReferenceLine y={0} stroke='#c084fc' />
      </BarChart>
    </Card>
  )
}

export default ProfitWidget