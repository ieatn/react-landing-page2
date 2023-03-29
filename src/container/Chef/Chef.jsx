import './Chef.css'
import {images} from '../../constants/index'

export default function Chef() {
  return (
    <section className="chef">
        <div className="container">
          <div className="chef__left">
            <img src={images.chef} alt="" />
          </div>
          <div className="chef__right"> 
            <p>Chef's Word</p>
            <h1>What We Believe In</h1>
            <img className='quote' src={images.quote} alt="" />
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, odit.</span>
            <p>Kevin Luo</p>
            <p>Chef And Founder</p>
            <img className='sign' src={images.sign} alt="" />
          </div>
        </div>
    </section>
  )
}
