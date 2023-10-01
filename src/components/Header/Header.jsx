import React from 'react'

import './header.css';
// import DivitLogo from '../../images/DivitLogo.png';
const nav__links = [
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#service',
        display:'Service'
    },
    {
        path:'#projects',
        display:'Projects'
    },
    {
        path:'#blog',
        display:'Blog'
    }
]   
const Header = ({theme, toggleTheme}) => {
  return (
   <header className="header">
        <div className="container">
            <div className="nav_wrapper">

                {/* <div className="logo">
                    <img src={DivitLogo} alt="divit-logo" />
                </div> */}
                <div className="logo">
                    <h2>Divit Data Solutions</h2>
                </div>
                
                {/*===Navigation bar====*/}
                <div className="navbar">
                    <ul className="menu">
                       { nav__links.map((item, index) => (
                            <li className="menu_item">
                                <a href={item.path} className="menu_link">
                                    {item.display}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*=====Light mode=====*/}
                <div className="light_mode">
                    <input type="checkbox" class="checkbox" id="checkbox"/>
                    <label for="checkbox" class="checkbox-label">
                        <i class="fas fa-moon"></i>
                        <i class="fas fa-sun"></i>
                        <span class="ball"></span>
                    </label>
                    <span onClick={toggleTheme}>
                        {
                            theme === 'light-theme' ? (
                            <span> 
                                <i class="ri-moon-line"></i> Dark         
                            </span> 
                            ) : (
                            <span>
                                <i class="ri-sun-line"></i>Light
                            </span>
                            )
                        }
                    </span>
                </div>
            </div>
        </div>
   </header>
  )
}

export default Header