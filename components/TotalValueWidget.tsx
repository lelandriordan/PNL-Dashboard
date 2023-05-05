import clsx from 'clsx'
import Card from '@/components/ds/Card'
import AreaChart from '@/components/AreaChart'
import { AreaProps } from '@/components/AreaChart'
import { useStatTotalValue } from '@/hooks/useStatistics'
import LoadingSpinner from './ds/LoadingSpinner'

export interface TotalValueWidgetProps {
  className?: string
}

function TotalValueWidget({className}: TotalValueWidgetProps) {
  const {data, error, isLoading} = useStatTotalValue()

  const areas: AreaProps[] = [{
    type: 'monotone',
    stroke: '#0ea5e9',
    dataKey: 'value'
  }]

  if (isLoading) return <LoadingSpinner />
  if (error) return <p>Error</p>
  return (
    <Card title="Total Value (USD)" className={clsx('grow', className && className)}>
      <AreaChart
        data={data}
        areas={areas}
      />
    </Card>
  )
}

export default TotalValueWidget