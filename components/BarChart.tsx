import {
  ResponsiveContainer,
  BarChart as BChart,
  YAxis,
  XAxis,
  Bar,
  Tooltip
} from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

// TODO: Retype using recharts type definitions
export interface BarProps {
  dataKey: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  type?: CurveType | undefined
}

export interface BarChartProps {
  data: any[]
  bars: BarProps[]
  height?: number | string
  width?: number | string
  children?: React.ReactNode
}

function BarChart({
  data,
  bars,
  height,
  width,
  children
}: BarChartProps) {
  return (
    <ResponsiveContainer width={width ?? '100%'} height={height ?? 280}>
      <BChart
        data={data}
        margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
      >
        <YAxis
          type='number'
          dataKey={'return'}
          domain={['dataMin', 'dataMax']}
          stroke={'#94a3b8'}
          style={{fontSize: '12px'}}
          width={30}
          tickCount={4}
          hide={true}
        />
        <XAxis
          type='category'
          dataKey={'x'}
          domain={['dataMin', 'dataMax']}
          stroke={'#64748b'}
          ticks={['Jan 21', 'May 23']}
          style={{
            fontSize: '12px'
          }}
        />
        { bars.map((bar, index) => (
          <Bar
            key={index + '-area'}
            type='monotone'
            dataKey={bar.dataKey}
            fill={bar.fill}
            stroke={bar.stroke ?? undefined}
            strokeWidth={bar.strokeWidth ?? 2}
          />
        ))}
        {/* TODO: Tooltip formatting needs work */}
        <Tooltip
          cursor={{fill: '#0ea5e9', fillOpacity: .25 }}
          wrapperStyle={{ border: 'none', fill: 'black', strokeWidth: 0}}
          contentStyle={{ backgroundColor: 'black'}}
          labelStyle={{ color: '#a5b4fc' }}
          formatter={(value, name) => `${value}`}
          labelFormatter={(value) => `${value}`}
        />
        {children}
      </BChart>
    </ResponsiveContainer>
  )
}

export default BarChart