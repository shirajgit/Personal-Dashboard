// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold">Overview</h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-400">Shiraj</span>
        <div className="w-10 h-10 bg-green-400 rounded-full" />
      </div>
    </header>
  )
}
