import React from 'react'
import CatCard from "../CatCard/CatCard"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {cards} from "../../data"

import "./Slide.scss"




function Slide() {
  
  const options = {
    center: true,
    items:5,
    loop:true,
    margin: 0,
    dots:false,
    nav: true,
    
  }

  return (
	<div className='slide'>
    <div className="container">
      <h2>Popular Services</h2>
      <OwlCarousel 
        className='owl-theme' 
        center={true} 
        items={5}
        nav={true}
        dots={false}
        loop={true}
        navText={['<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>']}
      >
          {cards.map(card => (
              <CatCard item={card} key={card.id}/>
          ))}
      </OwlCarousel>
    </div>
  </div>
  )
}

export default Slide