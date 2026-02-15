import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Question from './components/Question'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)
  const [score,setScore] = useState(0)
  const [currentIndex,setCurrentIndex] = useState(0)

  const [isOver,setIsOver] = useState(false)
  return (
    <>
     <h1>Quiz-App</h1>
     {isOver ? (<Result score={score} setScore={setScore} setIsOver={setIsOver} setCurrentIndex={setCurrentIndex}/>) : (
      <>
      <Timer setIsOver={setIsOver}/>
      <Question setIsOver={setIsOver} setScore={setScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      </>
    )}
    </>
  )
}

export default App
