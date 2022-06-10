import React from 'react'
// import images
import img6 from '../../images/secondHero-img/img6.webp'
// import CSS
import './seconHero.css'

const SecondHero = () => {
  return (
    <div className='SecondHero'>
        <div className="container SecondHero-box">
            <div className="left-secondHero">
                <h2>HAVE QUESTIONS?</h2>
                <h1>Get free one-on-one help <br /> from Airbnb’s best Hosts</h1>
                <div className="btn-a">
                    <a href="#">Ask a Superhost</a>
                </div>
            </div>
            <div className="right-secondHero">
                <img src={img6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SecondHero