import './Contact.css'
import images from '../../constants/images'

export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__left">
                    <p>Contact</p>
                    <h1>Find Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat!</p>
                    <div>
                        <p style={{marginBottom: '10px', color: 'gold'}}>Opening Hours</p>
                        <p>Mon-Fri: 10:00 Am - 02:00 Am</p>
                        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
                    </div>
                    <button className='btn'>Visit Us</button>
                </div>
                <div className="contact__right">
                    <img src={images.findus} alt="" />
                </div>
            </div>
        </section>
    )
}
