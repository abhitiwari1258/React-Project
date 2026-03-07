import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div className='heading'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/error'>Error</NavLink>
      </div>
    </div>
  )
}

export default NavBar
