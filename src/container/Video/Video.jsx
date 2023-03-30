import './Video.css'
import { meal } from '../../constants'
import { useRef, useState } from 'react'
export default function Video() {

    const [play, setPlay] = useState(true)
    const vidRef = useRef()

    const playVideo = () => {
        setPlay(!play)
        if (!play) {
            vidRef.current.pause()
        } else {
            vidRef.current.play()
        }
    }

    return (
    <section className="video">
        <video src={meal} ref={vidRef} type='video/mp4' loop muted></video>
        <div className="video__bg">
            <div className='play-btn' onClick={playVideo}>
                {play ? 
                    <i class="fa-solid fa-play"></i> :
                    <i class="fa-solid fa-pause"></i>
                }
            </div>
        </div>
    </section>
    )
}
