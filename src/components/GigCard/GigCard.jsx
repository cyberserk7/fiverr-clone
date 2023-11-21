import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.scss"

function GigCard({item}) {
  return (
    <Link to={"/gig/123"} className='link'>
      <div className='gigCard'>
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="horizontal-line">

        </div>
        <div className="details">
            <img src="https://clipart-library.com/img/1748262.png" alt="" />
            <div className="price">
              <span>STARTING AT</span>
              <h2>${item.price}</h2>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCard