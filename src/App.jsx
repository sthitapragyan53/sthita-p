import React from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Project from './components/project/Project';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footers/Footer.jsx';
import ScrollUp from './components/Scrollup/ScrollUp';

const App = () => {
  return (
    <>
        
        <Header />

        <main className="main">
          <Home />
          <About/>
          <Skill/>
          <Project/>
          <Qualification />
          <Contact />
          
          
          
        </main>
        <Footer/>
        <ScrollUp/>
          
      
    </>
  )
}

export default App
