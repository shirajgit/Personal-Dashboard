import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Personal Dashboard
        </h1>

        <p className="text-gray-400">
          Track tasks, skills, and daily progress
        </p>

        <Link
          href="/dashboard"
          className="inline-block bg-green-400 text-black px-8 py-3 rounded font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  )
}
