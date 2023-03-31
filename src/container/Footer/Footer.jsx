import Newsletter from '../../components/Newsletter'
import './Footer.css'
import images from '../../constants/images'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Newsletter />
                <div className='footer'>
                    <div className='footer-left'>
                        <h2>Contact Us</h2>
                        <p>9 W 53rd St, New York, NY 10019, USA</p>
                        <p>+1 212-344-1230</p>
                        <p>+1 212-344-1230</p>
                    </div>
                    <div className='footer-middle'>
                        <img src={images.gericht} alt="" />
                        <p style={{opacity: '1'}}>"The Best Way To Find Yourself Is To Lose Yourself In Others."</p>
                        <div className='social-media'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <p style={{marginTop: '4rem'}}>2023 ieatn. All Rights Reserved.</p>
                    </div>
                    <div className='footer-right'>
                        <h2>Working Hours</h2>
                        <p>Monday-Friday:</p>
                        <p>08:00 Am - 12:00 Am</p>
                        <br />
                        <p>Saturday - Sunday:</p>
                        <p>07:00 Am - 11:00 Pm</p> 
                    </div>
                </div>
            </div>
        </footer>
    )
}
