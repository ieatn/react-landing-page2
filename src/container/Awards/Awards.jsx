import './Awards.css'
import {images, data} from '../../constants'

export default function Awards() {

  const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
    <div className='award'>
      <img src={imgUrl} alt="" />
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <section className="awards">
      <div className="container">
          <div className="awards__left">
            <p>Awards & Recognition</p>
            <h1>Our Laurels</h1>
            <div className="awards__grid">
              {data.awards.map(i => <AwardCard award={i} key={i.title} />)}
            </div>
          </div>
          <div className="awards__right">
            <img src={images.laurels} alt="" />
          </div>
      </div>
    </section>
  )
}
