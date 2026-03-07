import React from "react";
import Image from '../assets/20.png'
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const isHomePg = true
  const navigate = useNavigate()
  const handleBtn = ()=>{
    if(isHomePg) navigate('/')
  }
  return (
    <div className="error">
      <div className="left">
        <h1 className="text-orange-400 text-6xl">404</h1>
        <h2 className="font-normal">OOOps!</h2>
        <h2 className="font-normal">Page Not Found</h2>
        <p className="text-gray-500 font-mono text-sm">
          This page doesn't exist or was removed!
        </p>
        <p className="text-gray-500 font-mono text-sm">
          We suggest you back to home
        </p>

        <button
          onClick={handleBtn}
          className="bg-green-700 text-white mt-4 text-sm p-4 rounded-4xl"
        >
          Back to homepage
        </button>
      </div>
      <div className="right">
        <img className="img" src={Image} alt="Image not loded" />
      </div>
    </div>
  );
};

export default Error;
