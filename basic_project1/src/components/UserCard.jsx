import React from 'react'
import Buttons from './Buttons'
// import { FaFacebook } from "react-icons/fa";

const UserCard = ({name,img,like,comment,share}) => {
  return (
    <div className=' bg-red-400 w-full rounded-2xl overflow-hidden'>
      <div className='relative w-full h-[10rem] aspect-video bg-blue-400'>
        <img className='absolute h-full rounded-full left-[50%] -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white' src={img} alt={name} />
      </div>

      <div className='flex flex-col items-center pt-8'>
        <h1>{name}</h1>
        <p>Dragon Ball Z</p>

        <div className='flex gap-[1rem]'>
            <p className='bg-blue-400 p-2 mt-2 rounded-full '>I</p>
            <p className='bg-blue-400 p-2 mt-2 rounded-full '>C</p>
            <p className='bg-blue-400 p-2 mt-2 rounded-full '>O</p>
            <p className='bg-blue-400 p-2 mt-2 rounded-full '>N</p>
        </div>

        <div className='flex gap-8 mt-4 '>
            <Buttons title="Subscribe"/>
            <Buttons title="Message"/>
        </div>

        <div className='flex items-center gap-2 mt-8 pb-3'>
            <div className='flex items-center text-xl text-black'>
                <p>Like</p>
                <span>{like}</span>
            </div> 

            <div className='w-[0.2rem] h-[2rem] bg-black'></div>

            <div className='flex items-center text-xl text-black'>
                <p>Com</p>
                <span>{comment}</span>
            </div> 

            <div className='w-[0.2rem] h-[2rem] bg-black'></div>

            <div className='flex items-center text-xl text-black'>
                <p>Shr</p>
                <span>{share}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
