'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'

type ChartProps = {
  type: 'line' | 'bar'
  data: any[]
  xKey: string
  yKey: string
}

export default function Chart({
  type,
  data,
  xKey,
  yKey,
}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === 'line' ? (
        <LineChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={yKey}
            strokeWidth={3}
          />
        </LineChart>
      ) : (
        <BarChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} />
        </BarChart>
      )}
    </ResponsiveContainer>
  )
}
