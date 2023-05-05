'use client'
import {
  ResponsiveContainer,
  AreaChart as AChart,
  YAxis,
  XAxis,
  Area,
  Tooltip
} from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

export interface AreaProps {
  dataKey: string
  stroke?: string
  strokeWidth?: number
  type?: CurveType | undefined
}

export interface AreaChartProps {
  data: any[]
  areas: AreaProps[]
  height?: number | string
  width?: number | string
}

function AreaChart({
  data,
  areas,
  height,
  width
}: AreaChartProps) {
  return (
    <ResponsiveContainer width={width ?? '100%'} height={height ?? 280}>
      <AChart
        data={data}
        margin={{ top: 0, left: 20, right: 20, bottom: 10 }}
      >
        <YAxis
          type='number'
          dataKey={'value'}
          domain={[0, 'dataMax']}
          stroke={'#94a3b8'}
          style={{fontSize: '12px'}}
          width={30}
          tickCount={4}
          hide={true}
        />
        <XAxis
          type='category'
          dataKey={'month'}
          domain={['dataMin', 'dataMax']}
          stroke={'#64748b'}
          ticks={['Jan 21', 'May 23']}
          style={{
            fontSize: '12px'
          }}
        />
        { areas.map((area, index) => (
          <Area
            key={index + '-area'}
            type='monotone'
            dataKey={area.dataKey}
            stroke={area.stroke ?? "#8884d8"}
            dot={false}
            strokeWidth={2}
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
      </AChart>
    </ResponsiveContainer>
  )
}

export default AreaChart