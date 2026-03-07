import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className='body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
