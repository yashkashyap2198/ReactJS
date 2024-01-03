import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  // let counter=5
  const addValue=()=>{
    if(counter<25)
    setCounter(counter+1);
    // console.log("clicked",counter);
  }
  const decValue=()=>{
    if(counter>0)
    setCounter(counter-1)
    // console.log("clicked",counter);
  }
  return (
    <>
     <h2>Counter</h2>
     <h3>Counter Value:{counter}</h3>

     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={decValue}>Dec Value</button>

      
    </>
  )
}

export default App
