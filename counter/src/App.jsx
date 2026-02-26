import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>{
    setCount(count+1);
  }
  const removeCount = ()=>{
    setCount(count-1);
  }
  var IsDark = false;
  const changetheme = ()=>{

  const btn = document.getElementById("d");


    if(IsDark===false){
      const body = document.body;
      body.style.backgroundColor = "black";
      body.style.color = "white";
      btn.innerHTML= "Light🔦 mood";
      IsDark =true;
      
    }
    else{
      const body = document.body;
      body.style.backgroundColor = "white";
      body.style.color = "black";
      btn.innerHTML= "Dark 🌚 mood";
      IsDark =false;
    }

  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>Add value {count}</button>
      <br/>
      <button onClick={removeCount}>Remove vlaue {count}</button>
      <br />
      <button id="d" onClick={changetheme}>dark mood</button>
      
    </> 
  )
}

export default App
