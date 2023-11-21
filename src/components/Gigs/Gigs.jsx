import React, { useState } from 'react'
import GigCard from "../GigCard/GigCard"
import "./Gigs.scss"
import {gigs} from "../../data"

function Gigs() {
  const [open,setOpen] = useState(false);
  const[sort,setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
	<div className='gigs'>
    <div className="container">
      <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
      <h1>AI Artists</h1>
      <p>
        Explore the boundaries of art and technology with Fiverr's AI artists
      </p>
      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder='min'/>
          <input type="text" placeholder='max'/>
          <button>Apply</button>
        </div>
        <div className="right" onClick={() => setOpen(!open)}>
          <span className='sortBy'>SortBy</span>
          <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
          {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg> 
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>}
          {open && (
            <div className="rightMenu">
              <span onClick={() => reSort("createdAt")}>Newest</span>
              <span onClick={() => reSort("sales")}>Best Selling</span>
            </div>
          )}
          
        </div>
      </div>
      <div className="cards">
        {gigs.map(gig => (
          <GigCard key={gig.id} item={gig}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gigs