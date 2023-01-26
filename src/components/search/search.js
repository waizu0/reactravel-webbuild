import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>ALL-INCLUSIVE LUXURY VACATIONS FOR COUPLES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar, ex sed feugiat scelerisque, libero nulla fermentum felis, at consequat ligula ante nec purus. Nunc at dignissim est. Fusce vitae elementum mi. Praesent faucibus nisl vel magna venenatis, sit amet tincidunt lectus sagittis. Quisque vel orci feugiat, ultrices lacus porta, bibendum dui. Pellentesque eget facilisis mi. Fusce vehicula, justo nec lobortis condimentum, urna neque fringilla felis, condimentum vestibulum elit urna eu metus. </p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>8 YEARS IN-A-ROW AS THE LEADING ALL-INCLUSIVE COMPANY</p>
                            </div>
                        </div>
                        <div className="box">
                 
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 5% OFF</h4>
                        <p className="timer">EXPIRES IN 12 HOURS</p>
                        <p className="offers">VIEW ALL OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Portugal</option>
                                <option value="1">Cancún</option>
                                <option value="1">Hawaii</option>
                                <option value="1">Rio de Janeiro</option>
                                <option value="1">Key West</option>
                                <option value="1">Thailand</option>
                                <option value="1">Ibiza</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;