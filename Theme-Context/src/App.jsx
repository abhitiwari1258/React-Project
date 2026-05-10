import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  

  return (
    <div>
      <h1>Theme Switching</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
