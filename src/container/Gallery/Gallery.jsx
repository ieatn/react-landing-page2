import './Gallery.css'
import images from '../../constants/images'
import { useRef } from 'react'

export default function Gallery() {

    const arrImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04,]

    const scrollRef = useRef(null)
    const scroll = (direction) => {
        const {current} = scrollRef
        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }

    return (
        <section className="gallery">
            <div className="container">
                <div className='gallery__left'>
                    <p>Instagram</p>
                    <h1>Photo Gallery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed!</p>
                    <button className="btn">View More</button>
                </div>
                <div className='gallery__right'>
                    <div className="gallery-carousel" ref={scrollRef}>
                        {arrImages.map((i, idx) => (
                            <div className='img-card' key={idx}>
                                <img src={i} alt=""  />
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        ))}
                    </div>
                    <div className="arrows">
                        <i className="fa-solid fa-arrow-left" onClick={() => scroll('left')}></i>
                        <i className="fa-solid fa-arrow-right" onClick={() => scroll('right')}></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
