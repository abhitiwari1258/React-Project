import React from 'react'
import Image from '../assets/20.png'
const Error = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
      <h1>Error Page</h1>
      <p>This page doesn't exist or was removed!</p>

      <div style={{width: '400px', height:"400px",       display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <img 
        style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
        }}
        className="img" src={Image} alt="Image not loded" />

      </div>
    </div>
  )
}

export default Error
