import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About';
import  Connect  from './Components/Contact';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <About/>
      <Connect/>
      
    </div>
  )
}

export default App
