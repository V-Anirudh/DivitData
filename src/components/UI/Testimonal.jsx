import React from 'react'
import '../../styles/testimonal.css'
import Slider from 'react-slick'
import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-1.jpg'

const Testimonal = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true
    }
  return (
    <section>
       <div className="container">
        <div className="slider_content-top">
            <h6 className="subtitle">Testimonals</h6>
            <h2>Trusted by more than <span className="highlight">5000 customers</span></h2>
        </div>
         <div className="slider">
            <Slider {...settings}>
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
                <div className="slider_item">
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos natus, tempore</p>
                    <div className="customer_details">
                        <div className="customer_img">
                            <img src={ava02} alt="" />
                        </div>
                        <div>
                            <h5 className="customer_name">Deepak</h5>
                            <p className="descripton">CEO</p>
                        </div>
                    </div>
                </div>
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
