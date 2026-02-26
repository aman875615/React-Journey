import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
    <Card title="Card_1" name={name} setName={setName}/>
    <Card title="Card_2" name={name} setName={setName}/>    
    {/* <p>I am inside parent Component and value of name is:{name}</p> */}
    </>
  )
}

export default App
