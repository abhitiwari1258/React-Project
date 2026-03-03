import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState('#242424')
  const [textColor,setTextColor] = useState('#ffffff')
  console.log(bgColor);
  console.log(textColor);
  
  
  function toggle(){
    setBgColor(prev => prev === '#242424' ? '#ffffff' : '#242424')
    setTextColor(prev => prev === '#ffffff' ? '#242424' : '#ffffff')
  }

  return (
    <>
    <div style={{ backgroundColor: bgColor, minHeight: '100vh'}}>
      <h1 style={{color: textColor }}>Switch The Theme</h1>
      <button style={{marginTop: '20px', padding:'20px', border: 'none', borderRadius: '10px', backgroundColor: 'blue', color:'white'}} onClick={toggle}>Toggle</button>
    </div>
    </>
  )
}

export default App
