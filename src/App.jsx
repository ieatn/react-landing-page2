import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Menu, Chef, Video, Awards, Gallery } from './container'



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
      <Gallery />
    </div>
  )
}

export default App
