import { useState } from 'react'

import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'


function App() {


  return (
    <>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
