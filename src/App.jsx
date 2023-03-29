import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Menu, Chef } from './container'



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      <About />
      <Menu />
      <Chef />
    </div>
  )
}

export default App
