import './Menu.css'
import {images, data} from '../../constants'
import MenuItem from '../../components/MenuItem'

export default function Menu() {
  return (
    <section className="menu">
        <div className="container">
            <p>Menu That Fits Your Palatte</p>
            <h1>Today's Special</h1>
            <div className="menu-content">
                <div className="menu__left">
                    <h2>Wine and Beer</h2>
                    {data.wines.map((i, idx) => (
                        <MenuItem title={i.title} price={i.price} key={idx}/>
                    ))}
                </div>
                <div className="menu__middle">
                    <img src={images.menu} alt="" />
                </div>
                <div className="menu__right">
                    <h2>Cocktails</h2>
                    {data.cocktails.map((i, idx) => (
                        <MenuItem title={i.title} price={i.price} key={idx}/>
                    ))}
                </div>
            </div>
            <button className='btn'>View More</button>
        </div>
    </section>
  )
}
