import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Menu, Chef, Video, Awards, Gallery, Contact, Footer } from './container'



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
