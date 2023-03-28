import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About } from './container'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      <About />
    </div>
  )
}

export default App
