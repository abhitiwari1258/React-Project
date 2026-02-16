import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Popup from './components/Popup'

function App() {
  const [popup, setPopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)

  return (
    <>
      <div className='flex gap-5'>
       <button className='bg-black' onClick={()=>setPopup(true)}>Delete</button>

       <Popup 
       popup={popup} 
       setPopup={setPopup} 
       title={"Delete"} 
       desc={"Are u sure u want to delete this ?"}/>

        <button className='bg-black' onClick={()=>setEditPopup(true)}>Edit</button>

       <Popup 
       popup={editPopup} 
       setPopup={setEditPopup} 
       title={"Edit"} 
       desc={"Are u sure u want to Edit this ?"}/>
      </div>
    </>
  )
}

export default App
