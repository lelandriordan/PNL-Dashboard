import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Line,
  Tooltip
} from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

export interface TimeSeriesLineProps {
  dataKey: string
  stroke?: string
  strokeWidth?: number
  type: CurveType | undefined
}

export interface TimeSeriesChartProps {
  data: any[]
  lines: TimeSeriesLineProps[]
  xAxisDataKey?: string
  height?: number | string
  width?: number | string
  children?: React.ReactNode
}

function TimeSeriesChart({
  data,
  lines,
  xAxisDataKey,
  height,
  width,
  children
}: TimeSeriesChartProps) {
  return (
    <ResponsiveContainer width={width ?? '100%'} height={height ?? 280}>
      <LineChart
        data={data}
        margin={{ top: 0, left: 20, right: 20, bottom: 10 }}
      >
        <YAxis
          type='number'
          dataKey={'return'}
          // FYI each value of domain can be set by function
          // (dataMax: number) => (dataMax * 1.1)
          domain={['dataMin', 'dataMax']}
          stroke={'#94a3b8'}
          style={{fontSize: '12px'}}
          width={30}
          tickCount={4}
          hide={true}
        />
        <XAxis
          type='category'
          dataKey={xAxisDataKey ?? 'time'}
          domain={['dataMin', 'dataMax']}
          stroke={'#64748b'}
          ticks={['1/01', '1/16', '1/31']}
          style={{
            fontSize: '12px'
          }}
        />
        { lines.map((line, index) => (
          <Line
            key={index + '-line'}
            type={line.type ?? 'monotone'}
            dataKey={line.dataKey}
            stroke={line.stroke ?? "#8884d8"}
            dot={false}
            strokeWidth={line.strokeWidth ?? 2}
          />
        ))}
        {/* TODO: Tooltip formatting needs work */}
        <Tooltip
          wrapperStyle={{ border: 'none'}}
          contentStyle={{ backgroundColor: 'black'}}
          labelStyle={{ color: '#a5b4fc' }}
          formatter={(value, name) => `${value}`}
          labelFormatter={(value) => `${value}`}
        />
        {children}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TimeSeriesChart