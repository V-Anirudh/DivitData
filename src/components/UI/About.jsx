import React from 'react'
import "../../styles/about.css"
import aboutImg from '../../images/about-us.jpg'
const chooseData = [
    {
        icon:'ri-wifi-line',
        title:'First Working Process',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto aliquam porro necessitatibus deleniti nulla at'
    },
    {
        icon:'ri-team-line',
        title:'Dedicated Team',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto aliquam porro necessitatibus deleniti nulla at'
    },
    {
        icon:'ri-customer-service-2-line',
        title:'24/7 Support',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto aliquam porro necessitatibus deleniti nulla at'
    }
]
const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about_wrapper">
                <div className="about_content">
                    <h6 className="subtitle">Why choose us</h6>
                    <h2>Specialist in aviding clients on </h2>
                    <h2 className="highlight"> financial challenges</h2>
                    <p className="description about_content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.  officiis sit, ratione neque inventore ipsa, ipsum modi odio architecto.</p>
                    <div className='choose_item-wrapper'>
                        {
                            chooseData.map((item,index) => (
                                                    
                                <div className="choose-item" key={index}>
                                    <span className="choose_us-icon"><i class={item.icon}></i></span>
                                    <div>
                                        <h4 className="choose_us-title">{item.title}</h4>
                                        <p className="description">{item.desc}</p>
                                    </div>
                            
                                </div>
                            ))
                        }
                    </div>
                </div>
                    <div className="about_img">
                        <img src={aboutImg} alt="" />
                    </div>
                
            </div>
        </div>
    </section>
  )
}

export default About
