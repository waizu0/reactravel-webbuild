import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from  '../../assets/bgvideo.mp4'

function Hero() {
  return (
    <div  className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4'/>
        </video>
        <div className="overlay">
          <div className="content">
            <h1>Explore the World.</h1>
            <h2>High-End Travel Spots</h2>
            <form className="form">
              <div>
                <input type="text" placeholder='Search your destination...' />
                </div>
                <div>
                  <button><AiOutlineSearch className='icon'/></button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Hero