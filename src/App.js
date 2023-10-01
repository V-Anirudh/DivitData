import React,{userState,useEffect, useState} from "react"
// import { Scrollbar } from 'react-scrollbars-custom';

import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonal from './components/UI/Testimonal';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';
function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme ===  '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme]);

  return (
  
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme = {theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonal />
      <Newsletter />
      <Footer />

    </> 
  );
}

export default App;
