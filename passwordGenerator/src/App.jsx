import { useState ,useCallback,useEffect,useRef} from 'react'
  
import './App.css'

function App() {
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [length,setLength] = useState(8)
  const [charAllowed,setCharAllowed] =useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)
  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqtrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$%^&*()_+{}[]~"
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char);
    }
    setPassword(pass)

  },[length, numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();//show keta hai ki kaun sa part copy kiya gya hai
    passwordRef.current?.setSelectionRange(0,100)// kitne copy krne hai
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]
)
  return (
  <>
    

     
  <div className="min-h-screen flex items-center justify-center bg-black">
  <div className="w-full max-w-md shadow-md rounded-xl px-6 py-6 bg-gray-800 text-orange-500">
      <h1 className=" text-3xl text-white text-center my-3">
      Password Generator
    </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        
        />
        <button onClick={copyPasswordToClipboard}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type='range'
          min={6}
          max={100}
          value ={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=> {
            setNumberAllowed((prev)=>!prev)
          }} 
          
          />
          <label htmlFor="numberInput">Number</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=> {
            setCharAllowed((prev)=>!prev)
          }} 
          
          />
          <label htmlFor="characterInput">Character</label>

        </div>
      </div>
    </div>
  </div>

  </>
)
}

export default App
