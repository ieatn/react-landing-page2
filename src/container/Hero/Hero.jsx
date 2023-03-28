import './Hero.css'
import Images from '../../constants/images'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
            <div className="hero__left">
              <p>Chase the New Flavor</p>
              <h1>THE KEY TO FINE DINING</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus.</p>
              <button className='btn'>Explore Menu</button>
            </div>
            <div className="hero__right">
              <img src={Images.welcome} alt="" />
            </div>
      </div>
    </section>
  )
}
