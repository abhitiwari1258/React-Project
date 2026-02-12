import React from 'react'
const Button = ({color,setSelectedColor,children}) => {
  function setColor(){
    setSelectedColor(color)
  }
  return (
    <div>
      <button onClick={setColor} style={{backgroundColor:color}}>{children}</button>
    </div>
  )
}

export default Button
