'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

type Task = {
  id: number
  title: string
  completed: boolean
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  const addTask = () => {
    if (!title.trim()) return
    setTasks([
      ...tasks,
      { id: Date.now(), title, completed: false },
    ])
    setTitle('')
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        {/* Add Task */}
        <div className="flex gap-4 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 px-4 py-2 rounded bg-gray-900 border border-gray-700"
          />
          <button
            onClick={addTask}
            className="bg-green-400 text-black px-6 rounded font-semibold"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-900 p-4 rounded"
            >
              <div
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.title}
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400"
              >
                Delete
              </button>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-gray-500 text-center">
              No tasks yet 🚀
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
