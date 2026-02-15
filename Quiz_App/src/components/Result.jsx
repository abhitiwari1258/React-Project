import React from 'react'

const Result = ({score,setIsOver,setScore,setCurrentIndex}) => {
    function reset(){
        setIsOver(false)
        setScore(0)
        setCurrentIndex(0)
    }
  return (
    <div className='m-6'>
      <h1>Your Result : {score}</h1>
      <button className='mt-6' onClick={reset}>Reset</button>
    </div>
  )
}

export default Result
