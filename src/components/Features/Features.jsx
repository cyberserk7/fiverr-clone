import React from 'react'
import "./Features.scss"

function Features() {
  return (
    <div className='features'>
        <div className="container">
            <div className="left">
                <h1>The best part? Everything.</h1>
                <div className="tick-container">
                    <div className='tick-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2>Stick to your budget</h2>
                    </div>
                    <h3>Find the right service for every price point. No hourly rates, just project-based pricing.</h3>
                </div>
                <div className="tick-container">
                    <div className='tick-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2>Get quality work done quickly</h2>
                    </div>
                    <h3>Hand your project over to a talented freelancer in minutes, get long-lasting results.</h3>
                </div>
                <div className="tick-container">
                    <div className='tick-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2>Pay when you're happy</h2>
                    </div>
                    <h3>Upfront quotes mean no surprises. Payments only get released when you approve.</h3>
                </div>
                <div className="tick-container">
                    <div className='tick-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2>Count on 24/7 support</h2>
                    </div>
                    <h3>Find the right service for every price point. No hourly rates, just project-based pricing.</h3>
                </div>
            </div>
            <div className="right">
                <video src="/src/assets/video.mp4" poster="/src/assets/thumbnail.png" controls></video>
            </div>
        </div>
    </div>
  )
}

export default Features