import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <div className='h-screen text-white justify-center flex items-center bg-zinc-900'>
      <div>
        <h1 >Task app</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}
