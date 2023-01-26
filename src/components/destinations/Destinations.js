import React from 'react'
import './DestinationsStyles.css'

import Portugal from '../../assets/Portugal.jpg'
import Cancun from '../../assets/cancun.jpg'
import Hawaii from '../../assets/Hawaii.jpg'
import Rio from '../../assets/rio.jpg'
import Thailand from '../../assets/thailand.jpg'


function Destinations() {
  return (
    <div className='destinations'>
        <div className="container">
            <h1>All-Inclusives</h1>
            <h2>In the world's finest resorts</h2>
            <div className="img-container">
                <img className="span-3 image-grid-row-2" src={Cancun} alt="/" />
                <img src={Thailand} alt="/" />
                <img src={Rio} alt="/" />
                <img src={Portugal} alt="/" />
                <img src={Hawaii} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Destinations