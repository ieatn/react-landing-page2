import './Newsletter.css'
export default function Newsletter() {
  return (
    <div className='newsletter'>
        <p>Newsletter</p>
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Updates</p>
        <div>
          <input type="text" placeholder='Email Address'/>
          <button className='btn'>Subscribe</button>
        </div>
    </div>
  )
}
