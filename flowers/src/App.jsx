import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/Home.jsx'
import Rose from './assets/Rose.jsx'
import Lavender from './assets/Lavender.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/rose" element={<Rose />}/>
      <Route path="/lavender" element={<Lavender />}/>
    </Routes>
  )
}

export default App
