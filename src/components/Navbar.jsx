import './Navbar.css'
import images from '../constants/images'
import { useState } from 'react'

export default function Navbar() {

  const [modal, setModal] = useState(false)

  return (
    <nav>
      <div className="nav-container">
        <div className="nav__left">
          <a href="#"><img src={images.gericht} alt="" /></a>
        </div>
        <div className="nav__middle">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav__right">
          <a href="#">Log In / Register</a>
          <a href="#">Book Table</a>
        </div>
        <div className="modal-btn">
          <i className="fa-solid fa-bars hidden" onClick={() => setModal(!modal)}></i>
        </div>
      </div>
      
      {modal && (
        <div className={`modal ${modal ? 'open' : ''}`}>
          <i className="fas fa-window-close modal-close" onClick={() => setModal(!modal)}></i>
          <a onClick={() => setModal(!modal)} href="#">Home</a>
          <a onClick={() => setModal(!modal)} href="#about">About</a>
          <a onClick={() => setModal(!modal)} href="#menu">Menu</a>
          <a onClick={() => setModal(!modal)} href="#awards">Awards</a>
          <a onClick={() => setModal(!modal)} href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}
