// app/dashboard/page.tsx
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import StatCard from '@/components/ProgressCard'

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Tasks Completed" value="12 / 20" />
          <StatCard title="Productivity" value="78%" />
          <StatCard title="Current Streak" value="5 Days" />
          <StatCard title="Skills" value="6" />
        </div>

        {/* Progress Section */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Skill Progress</h3>

          <div className="space-y-4">
            {[
              { skill: 'React', level: 80 },
              { skill: 'Next.js', level: 65 },
              { skill: 'Backend', level: 40 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-1">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded">
                  <div
                    className="bg-green-400 h-2 rounded"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
