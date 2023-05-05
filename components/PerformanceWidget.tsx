import clsx from 'clsx'
import Card from '@/components/ds/Card'
import TimeSeriesChart, { TimeSeriesLineProps } from '@/components/TimeSeriesChart'
import useStatPnl1D from '@/hooks/useStatistics'
import LoadingSpinner from './ds/LoadingSpinner'

export interface PerformanceWidgetProps {
  className?: string
}

function PerformanceWidget({className}: PerformanceWidgetProps) {
  const {data, error, isLoading} = useStatPnl1D()

  const lines: TimeSeriesLineProps[] = [
    {
      type: 'monotone',
      stroke: '#0ea5e9',
      dataKey: 'return'
    },
    {
      type: 'monotone',
      stroke: '#c084fc',
      dataKey: 'zero',
      strokeWidth: 1
    }
  ]

  if (isLoading) return <LoadingSpinner />
  if (error) return <p>Error</p>
  return (
    <Card title="1D PNL" className={clsx('grow', className && className)}>
      <TimeSeriesChart data={data} lines={lines} />
    </Card>
  )
}

export default PerformanceWidget