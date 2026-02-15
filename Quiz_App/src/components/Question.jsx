import React, { useState } from 'react'
import questions from './question.json'
const Question = ({setIsOver,setScore,currentIndex,setCurrentIndex}) => {
    // const [currentIndex,setCurrentIndex] = useState(0)

    const handleOptionClick = (selectedOption)=>{
        console.log(selectedOption)
        if(selectedOption === questions[currentIndex].answer){
            setScore(prev => prev + 1)
        }
        if(currentIndex < questions.length - 1){
            setCurrentIndex(prev => prev + 1)
        }else{
            setIsOver(true);
        }
    }

  return (
    <div>
      <h2 className='mt-8 mb-4'>{questions[currentIndex].question}</h2>

      <div className='flex flex-col gap-3'>
        {
            questions[currentIndex].options.map((option)=>{
                return(
                    <button onClick={()=>handleOptionClick(option)} key={option}>{option}</button>
                )
            })
        }
      </div>
    </div>
  )
}

export default Question
