import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const maxLen = 100
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [length,setLength] = useState(8)
  const [savePass,setSavepass] = useState([])
  const passwordRef = useRef()
  // console.log(length);
  // console.log(number);
  // console.log(character);
  
  const genPass = ()=>{
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    if(number) str+= '123456789'
    if(character) str+= '!@#$%^&*()_+-=~`{}[]|<>/?'

    for(let i=1; i<=length; i++){
      const randomNumber = Math.floor(Math.random()*str.length)
      // console.log(randomNumber);
      let charPicked = str.charAt(randomNumber)
      pass += charPicked
    }
     setPassword(pass)
  }

  useEffect(()=>{
    genPass()
  },[length,number,character])

  const copyToClipBoard = ()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,maxLen)
    navigator.clipboard.writeText(password)
  }
  return (
    <>
    <h1 className='text-center mt-5 font-bold'>Password Generator</h1>
      <div className='flex flex-col gap-5 max-w-120 m-auto mt-10'>

      <input 
      ref={passwordRef}
      type="text" 
      placeholder='Enter Password' 
      readOnly={true}
      value={password}
      className='outline-none border-none bg-gray-200 px-3 rounded-lg text-black '
       />

       <label htmlFor="number">
        <input 
        id='number' 
        type="checkbox"
        checked={number}
        onChange={(e)=>setNumber(e.target.checked)}
         />
        Number Allowed
       </label>

       <label htmlFor="character">
        <input 
        id='character' 
        type="checkbox"
        checked={character}
        onChange={(e)=>setCharacter(e.target.checked)}
         />
        Character Allowed
       </label>

       <input type="range" min={0} max={maxLen} value={length} onChange={(e)=>setLength(e.target.value)}/>

       <button onClick={copyToClipBoard} className='bg-blue-500 px-3 py-2'>Copy Password</button>

       <button onClick={()=>{
        setCharacter(false)
        setNumber(false)
        setLength(8)
       }} className='bg-blue-500 px-3 py-2'>Reset Password</button>

       <button onClick={()=>setSavepass([...savePass,password])} className='bg-blue-500 px-3 py-2'>Save Password</button>

       {savePass.map((itm,idx)=>{
        return(
          <p key={idx}>{itm}</p>
        )
       })}

      
      </div>
    </>
  )
}

export default App
