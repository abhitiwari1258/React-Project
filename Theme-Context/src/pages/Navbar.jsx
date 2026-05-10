import React from 'react'
import {NavLink} from 'react-router-dom'
import { useThemeContext } from '../context/ThemeContext'
const Navbar = () => {
    const {theme,toggleTheme} = useThemeContext()
    // console.log(theme)
    // console.log(setToggle);
    
  return (
    <div style={{
        backgroundColor: theme === 'light' ? "#ffffff" : "#222222",
        color: theme ==='light' ? '#222222' : "#ffffff"
    }}>
      <NavLink style={{color: theme==='light' ? '#222222' : "#ffffff"}} to={'/'}>Home</NavLink>
      <NavLink style={{color: theme === 'light' ? "#222222" : "#ffffff"}}  to={'/about'}>About</NavLink>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Navbar
