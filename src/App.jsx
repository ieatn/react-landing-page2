import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './container'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Hero />
      <div>hello world</div>
    </div>
  )
}

export default App
