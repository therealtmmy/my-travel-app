import React from 'react'
import "./Hero.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='Hero'>
      <div>
        <img src="https://source.unsplash.com/WLxQvbMyfas" alt="" />
      </div>
        
        <div>
            <div className='Location'>
                <span><FaMapMarkerAlt color='red'/> JAPAN</span>
                <a href="">View on Google Maps</a>
            </div>

            <h1>Mount Fuji</h1>
            <p className='Date'>12 Jan, 2023 - 24 Jan, 2023</p>
            <p className='Hero-Detail'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
  )
}

export default Hero
