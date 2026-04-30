import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Ebook from './components/Ebook';
import Conferences from './components/Conferences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Ebook/>
      <Conferences/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default App
