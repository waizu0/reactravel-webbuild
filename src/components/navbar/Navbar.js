import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'

import './NavbarStyles.css'


function NavBar()
{

    const[nav, setNav] = useState(false);
    const handleNavClick = () => setNav(!nav)

    return(
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
    
        <div className={nav ? 'logo dark-logo' : 'logo'}>
            <h2>REACTRAVEL</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Booking</li>
            <li>Views</li>
        </ul>
        <div className="nav-menu-icons">
            <BiSearch className='menu-icon' style={{marginRight: '1rem'}}/>'
            <BsPerson className='menu-icon' />'
        </div>
        <div className="full-menu" onClick={handleNavClick}>
            {!nav ? (<HiOutlineMenuAlt4 className='menu-icon' />) :(<AiOutlineClose style={{color: '#000'}} className='menu-icon' />)}
            
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-navbar">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Booking</li>
                <li>Views</li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="mobile-menu-icons">
                <button>Search</button>
                <button>My Account</button>
                </div>
                <div className="social-media-icons">
                    <FaFacebook className='menu-icon' />
                    <FaTwitter className='menu-icon' />
                    <FaYoutube className='menu-icon' />
                </div>
            </div>
        </div>

    </div>
    )
}

export default NavBar