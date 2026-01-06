'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

type Log = {
  id: number
  note: string
  date: string
}

export default function DailyLogsPage() {
  const [logs, setLogs] = useState<Log[]>([])
  const [note, setNote] = useState('')

  const addLog = () => {
    if (!note.trim()) return

    setLogs([
      {
        id: Date.now(),
        note,
        date: new Date().toLocaleDateString(),
      },
      ...logs,
    ])

    setNote('')
  }

  const deleteLog = (id: number) => {
    setLogs(logs.filter((log) => log.id !== id))
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <h2 className="text-2xl font-bold mb-6">
          Daily Logs
        </h2>

        {/* Add Log */}
        <div className="bg-gray-900 p-6 rounded mb-8">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What did you learn or work on today?"
            className="w-full h-28 p-4 rounded bg-gray-950 border border-gray-700 resize-none"
          />

          <button
            onClick={addLog}
            className="mt-4 bg-green-400 text-black px-6 py-2 rounded font-semibold"
          >
            Save Log
          </button>
        </div>

        {/* Logs List */}
        <div className="space-y-4">
          {logs.length === 0 && (
            <p className="text-gray-500 text-center">
              No logs yet ✍️
            </p>
          )}

          {logs.map((log) => (
            <div
              key={log.id}
              className="bg-gray-900 p-5 rounded relative"
            >
              <span className="text-sm text-gray-500">
                {log.date}
              </span>

              <p className="mt-2 text-gray-200">
                {log.note}
              </p>

              <button
                onClick={() => deleteLog(log.id)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
