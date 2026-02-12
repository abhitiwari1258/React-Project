import React from 'react'
const Box = ({color}) => {
  return (
    <div style={{backgroundColor:color}} className='w-100 h-32 font-extrabold text-center content-center rounded-md m-auto border-2'>
      {color}
    </div>
  )
}

export default Box