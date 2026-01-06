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
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

const data = [
  { day: 'Mon', tasks: 2 },
  { day: 'Tue', tasks: 4 },
  { day: 'Wed', tasks: 3 },
  { day: 'Thu', tasks: 6 },
  { day: 'Fri', tasks: 5 },
]

export default function ProgressPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h2 className="text-2xl font-bold mb-6">
          Productivity Analytics
        </h2>

        {/* Line Chart */}
        <div className="bg-gray-900 p-6 rounded mb-10">
          <h3 className="mb-4 text-lg">Weekly Progress</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tasks"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-900 p-6 rounded">
          <h3 className="mb-4 text-lg">Tasks Per Day</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
