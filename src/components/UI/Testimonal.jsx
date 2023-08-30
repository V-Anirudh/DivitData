import React from 'react'
import '../../styles/testimonal.css'
import Slider from 'react-slick'
import ava01 from '../../images/ava-1.jpg'

const Testimonal = () => {
  return (
    <section>
       <div className="container">
        <div className="slider_content-top">
            <h6 className="subtitle">Testimonals</h6>
            <h2>Trusted by more than <span className="highlight">5000 customers</span></h2>
        </div>
         <div className="slider">
            <Slider>
                <div className="slider_item">
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos natus, tempore</p>
                    <div className="customer_details">
                        <div className="customer_img">
                            <img src={ava01} alt="" />
                        </div>
                        <div>
                            <h5 className="customer_name">Shashank</h5>
                            <p className="descripton">CEO</p>
                        </div>
                    </div>
                </div>
            </Slider>
         </div>
       </div>
    </section>
  )
}

export default Testimonal
