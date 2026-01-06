// components/StatCard.tsx
export default function ProgressCard({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  )
}
