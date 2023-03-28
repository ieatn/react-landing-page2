import './About.css'
import images from '../../constants/images'

export default function About() {
  return (
    <section className="about">
        <div className="container">
            <div className="about__left">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione amet dolorem esse ducimus sint aliquam officia optio maiores doloribus soluta?</p>
                <button className="btn">Read More</button>
            </div>
            <div className="about__middle">
                <img className='knife' src={images.knife} alt="" />
                <img className='G' src={images.G} alt="" />
            </div>
            <div className="about__right">
                <h1>Our History</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione amet dolorem esse ducimus sint aliquam officia optio maiores doloribus soluta?</p>
                <button className="btn">Read More</button>
            </div>
        </div>
    </section>
  )
}
