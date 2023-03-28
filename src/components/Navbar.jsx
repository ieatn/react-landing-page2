import './Navbar.css'
import images from '../constants/images'

export default function Navbar() {
  return (
    <nav>
        <div className="left">
          <img src={images.gericht} alt="" />
        </div>
        <div className="middle">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Awards</a>
          <a href="#">Contact</a>
        </div>
        <div className="right">
          <a href="#">Log In / Register</a>
          <a href="#">Book Table</a>
        </div>
        <div className="hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}
