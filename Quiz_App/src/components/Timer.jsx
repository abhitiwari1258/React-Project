import React, { useEffect,useState } from 'react'


const Timer = ({setIsOver}) => {
    const [leftTime,setLeftTime] = useState(65);
    const [displayTime,setDisplayTime] = useState('')

    useEffect(()=>{
        let id = setInterval(()=>{
            setLeftTime(prev => {
                if(prev <= 0){
                    clearInterval(id)
                    return 0;
                }
                return prev - 1;
            })
        },1000);

        return()=>{
            clearInterval(id)
        }
    },[])

    useEffect(()=>{
        if(leftTime === 0){
            setIsOver(true)
        }
        let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)}`)

        setDisplayTime(formatedTime)
    },[leftTime])

  return (
    <div className='mt-5'>
      <h2>⏰ Time Left : {displayTime}</h2>
    </div>
  )
}

export default Timer
