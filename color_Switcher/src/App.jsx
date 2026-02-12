import { useState } from 'react'
import Button from './components/Button'
import Box from './components/Box'
import './App.css'

function App() {
   const colors = ["red","green","blue","tomato","lightseagreen","aqua"]

   const [selectedColor,setSelectedColor] = useState('transparent')

  return (
    <>
      <div>
        <h1>🎨Color-Switcher</h1>
        <div className='flex gap-6 my-6'>
          {colors.map((item)=>{
            return(
              <Button setSelectedColor={setSelectedColor} color={item} key={item}>{item}</Button>
            )
          })}
        </div>

        <Box color={selectedColor}/>
      </div>
    </>
  )
}

export default App