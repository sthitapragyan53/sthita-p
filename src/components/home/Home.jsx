import React from 'react'
import './Home.css'
import Social from './social'
import Data from './data'
import profile from '../../assets/profile.jpg'   // <-- Import the image
import ScrollDown from './ScrollDown'
function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          
          {/* Apply the image as a background */}
          <div 
            className="home__img" 
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
          
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
