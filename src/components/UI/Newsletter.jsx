import React from 'react'
import '../../styles/newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="container">
            <div className="newsletter_wrapper">
                <div className="newletter_content">
                    <h6 className="subtitle">Let's Work</h6>
                    <h2>Explore the <span className="highlight">hidden</span> ideas and subscribe!</h2>
                </div>
                <div className="newsletter_form">
                    <input type="email" name="" id="" placeholder='Email' />
                    <button className="secondary_btn">Subscribe Now </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
