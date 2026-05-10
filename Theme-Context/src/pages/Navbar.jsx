import React from 'react'
import {NavLink} from 'react-router-dom'
import { useThemeContext } from '../context/ThemeContext'
const Navbar = () => {
    const {theme,toggleTheme} = useThemeContext()
    
  return (
    <div style={{
      padding: '20px',
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        justifyContent:"center"
    }}>
      <NavLink style={{color: theme==='light' ? '#000' : "#fff"}} to={'/'}>Home</NavLink>
      <NavLink style={{color: theme === 'light' ? "#000" : "#fff"}}  to={'/about'}>About</NavLink>
      <NavLink style={{color: theme === 'light' ? '#000' : '#fff'}} to={'/contact'} >Contact</NavLink>
       <NavLink style={{color: theme === 'light' ? '#000' : '#fff'}}  to={'/error'} >Error</NavLink>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Navbar
