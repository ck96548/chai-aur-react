import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(15)
  
// let counter = 15;
function addValue(){
  
  // counter = counter+1;
  setCounter(counter+1)
  //console.log("value added :" +  counter)
}
function removeValue(){
  if(counter < 1){
    setCounter(0)
  }else{
    setCounter(counter - 1)
  }
  
  
 // console.log("value added :" +  counter)
}

  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addValue}>Add to Counter</button>
       <br />
       <br />
       <button onClick={removeValue}>Remove to Counter</button>
    </>
  )
}

export default App
