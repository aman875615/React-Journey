import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,reset,incrementByAmount } from './features/counter/counterScile'


// {useSelecter} store se data  khi bhi bahar use karna ho to useSelecter ka use karenge
// {useDispatch} store me data ko update karne ke liye useDispatch ka use karenge
function App() {
  const [amount,setAmount] = useState(0);
  const disPatch =useDispatch()
  const count = useSelector((state)=>state.counter.value)
  function handleIncrement(){
    disPatch(increment())
  }
  function handleDecrement(){
    disPatch(decrement())
  }
  function handleReset(){
    disPatch(reset())
  }
  function handleIncrementByAmount(){
    disPatch(incrementByAmount(amount))
  }

  return (
    <>
      <div className='container'>
        <h1>Counter App</h1>
        <p>Count:{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrementByAmount}>Increment By Amount</button>
        <input
         type="Number"
         placeholder='Enter Amount'
         value ={amount}
         onChange={(e)=>setAmount(Number(e.target.value))}/>
      </div>
    </>
  )
}

export default App