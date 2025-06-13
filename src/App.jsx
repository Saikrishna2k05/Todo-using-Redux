import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from '../components/addTodo.jsx'
import Todos from '../components/todos.jsx'

import './App.css'

function App() {
  return (
    <>
        <AddTodo/>
        <Todos/>
    </>
  )
}

export default App
