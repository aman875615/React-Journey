import {useState} from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
 const [count ,setCount] =useState(0);
 function handlerClick(){
  setCount(count+1);
 }

  return (
    <>
    <Button handlerClick={handlerClick} text = "Click me">
      <h1>{count}</h1>
      </Button>

    
      {/* <Card name="Aman Verma">  
      <h1>Best Web Dev</h1>
      <p>trying to be </p>
      </Card>
      <Card children="Main first children hu (overwrite ho gya hai ) ydi niche vala n ho to mai aa jaunga">
        hai  ji kaise hai aap ye second child hai esliyr esli priority jyada hogi
      </Card> */}

    </>
  )
}

export default App
