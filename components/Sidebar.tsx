'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Overview', path: '/dashboard' },
  { name: 'Tasks', path: '/dashboard/tasks' },
  { name: 'Progress', path: '/dashboard/progress' },
  { name: 'Daily Logs', path: '/dashboard/logs' },
  { name: 'Settings', path: '/dashboard/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-900 h-screen p-6 hidden md:block">
      <h1 className="text-2xl font-bold text-green-400 mb-8">
        Dashboard
      </h1>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded transition
                ${
                  isActive
                    ? 'bg-green-400 text-black font-semibold'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
