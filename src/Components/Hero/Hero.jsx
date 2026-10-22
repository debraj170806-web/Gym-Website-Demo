import React from 'react'
import "./Hero.css"
import BB1 from "../../assets/BB1.png"
function Hero() {
  return (
    <section className='hero' id='home'>
        <div className="hero-text">
            <p className='hero-label'>YOUR NEXT LEVEL STARTS HERE</p>
            <h1>
                NO EXCUSES.
                <br></br>
                <span>JUST RESULTS</span>
            </h1>
            <p className="hero-description">
          Train with purpose. Build real strength.
          Become the strongest version of yourself.
        </p>
        <a href='#contact' className='hero-button'>START YOUR JOURNEY ↗</a>
        </div>
        <div className="hero-image">
  <img
    src={BB1}
    alt="Muscular athlete in dramatic black and white lighting"
  />
</div>
    </section>
  )
}

export default Hero