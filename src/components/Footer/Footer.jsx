import React from 'react'
import './footer.css'
const quickLinks01 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Development'
    }
]
const quickLinks02 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Development'
    }
]
const quickLinks03 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Development'
    }
]

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Divit Data Solutions</h2>
                    <p className="decription">Grow with us</p>
                    <p className="small_text description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quos impedit 
                    nesciunt assumenda mollitia deleniti consectetur quisquam quo. 
                   </p>
                </div>
                <div className="footer_quick-links">
                    <div className="quick_link-title">Solution</div>
                    <ul className="quick_links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="footer_quick-links">
                    <div className="quick_link-title">Company</div>
                    <ul className="quick_links">
                        {
                            quickLinks02.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className="footer_quick-links">
                    <div className="quick_link-title">Solution</div>
                    <ul className="quick_links">
                        {
                            quickLinks03.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div> */}

            </div>
            <p className="copyright">
                    Copyright {year}, developed by @Anirudh Vallampatla.All rights reserved.{" "}
                </p>
        </div>
        
    </footer>
    
  )
}

export default Footer
