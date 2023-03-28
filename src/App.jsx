import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Menu } from './container'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      <About />
      <Menu />
    </div>
  )
}

export default App
