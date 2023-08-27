import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon:'ri-apps-line',
        title:'App Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. , eius eveniet reiciendis quis voluptate suscipit quasi officiis quam deserunt perspiciatis consectetur vero ab.'
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. , eius eveniet reiciendis quis voluptate suscipit quasi officiis quam deserunt perspiciatis consectetur vero ab.'
    },
    {
        icon:'ri-database-line',
        title:'Data Analyst',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit., eius eveniet reiciendis quis voluptate suscipit quasi officiis quam deserunt perspiciatis consectetur vero ab.'
    },
    {
        icon:'ri-phone-find-fill',
        title:'Testing',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.  , eius eveniet reiciendis quis voluptate suscipit quasi officiis quam deserunt perspiciatis consectetur vero ab.'
    },
]

const Services = () => {
  return (
    <section className="service">
        <div className="container">
            <div className="service_top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time managing your business</h2>
                <h2 className="highlight"> our best services</h2>
            </div>
            <div className="services_item-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="service_item" key={index}>
                            <span className="service_icon"><i class={item.icon}></i></span>
                            <h3 className="service_title">{item.title}</h3>
                            <p className="description">{item.desc}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  ) 
}

export default Services
