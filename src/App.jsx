import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Menu, Chef, Video, Awards } from './container'



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      {/* everything below is breaking on mobile */}
      <About />
      <Menu />
      <Chef />
      <Video />
      <Awards />
    </div>
  )
}

export default App
