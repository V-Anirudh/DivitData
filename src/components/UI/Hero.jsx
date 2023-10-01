import React from 'react'
import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'

const Hero = ({theme}) => {
  return (
    <section className="hero_section">
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                        <h2>We're Creating Perfect</h2>
                        <h2>Digital Services To</h2>
                        <h2 className="highlight"> We promote your resume </h2>
                    </div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      consequat massa quis enim.  </p>
                      <div className="hero_btn">
                        <button className="primary_btn">
                            Get Started Now
                        </button>
                        <button className="secondary_btn">Discover More</button>
                      </div>
                </div>
                <div className="hero_img">
                    <img src={theme==='light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
