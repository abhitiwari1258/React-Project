import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { useThemeContext } from './context/ThemeContext'
import Contact from "./pages/Contact";
import Error from "./pages/Error"
function App() {
  const {theme} = useThemeContext()

  return (
    <>
    <div className="app"  style={{
        backgroundColor: theme === 'light' ? "#ffffff" : "#222222",
        color: theme ==='light' ? '#222222' : "#ffffff",
        minHeight: "100vh",
        width: "100%",
        transition: "0.3s ease"
    }}>
      <h1>Theme Switching</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>

    </div>
    </>
  )
}

export default App
