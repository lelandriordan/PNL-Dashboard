import {
  LineChart,
  YAxis,
  Line
} from 'recharts';

export interface SparklineChartProps {
  data: { value: number }[]
}

function SparklineChart({data}: SparklineChartProps) {
  return (
    <LineChart
      width={150}
      height={50}
      data={data}
      margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <YAxis
        type="number"
        dataKey={'value'}
        domain={['dataMin', 'dataMax']}
        tick={false}
        axisLine={false}
        hide={true}
      />
      <Line
        type="monotone"
        dataKey={'value'}
        stroke="#8884d8"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  )
}

export default SparklineChart