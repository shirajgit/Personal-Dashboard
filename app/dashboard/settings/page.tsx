'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function SettingsPage() {
  const [username, setUsername] = useState('Shiraj')
  const [email, setEmail] = useState('shiraj@email.com')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h2 className="text-2xl font-bold mb-8">
          Settings
        </h2>

        {/* Profile Settings */}
        <section className="bg-gray-900 p-6 rounded mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Profile
          </h3>

          <div className="space-y-4">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 rounded bg-gray-950 border border-gray-700"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-950 border border-gray-700"
            />

            <button className="bg-green-400 text-black px-6 py-2 rounded font-semibold">
              Save Changes
            </button>
          </div>
        </section>

        {/* Appearance Settings */}
        <section className="bg-gray-900 p-6 rounded mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Appearance
          </h3>

          <div className="flex items-center justify-between">
            <span>Dark Mode</span>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition
                ${darkMode ? 'bg-green-400' : 'bg-gray-700'}
              `}
            >
              <span
                className={`bg-black w-5 h-5 rounded-full transform transition
                  ${darkMode ? 'translate-x-7' : 'translate-x-0'}
                `}
              />
            </button>
          </div>
        </section>

        {/* Account Settings */}
        <section className="bg-gray-900 p-6 rounded">
          <h3 className="text-lg font-semibold mb-4">
            Account
          </h3>

          <button className="text-red-400 hover:text-red-500">
            Logout
          </button>
        </section>
      </main>
    </div>
  )
}
