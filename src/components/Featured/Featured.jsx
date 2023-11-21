import React from 'react'
import "./Featured.scss"

function featured() {
  return (
	<div>
		<div className="featured">
			<div className="container">
				<div className="left">
					<h1 className='heading'>Find the right {' '}
						<span>freelance</span> <br />
						 service, right away
					</h1>
					<div className="search-bar">
						<input type="text" placeholder='Search for any service...'/>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</button>
					</div>
					<div className='popular'>
						<span>Popular :</span>
						<button>Photoshop</button>
						<button>Video Editing</button>
						<button>WordPress</button>
						<button>AI Services</button>
					</div>
				</div>
				<div className="right">
					<img src="/src/assets/man.png" alt="" />
				</div>
			</div>
		</div>
		
	</div>
  )
}

export default featured