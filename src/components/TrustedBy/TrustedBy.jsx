import React from 'react'
import "./TrustedBy.scss"
import logo1 from "/src/assets/logo/meta-logo.png"
import logo2 from "/src/assets/logo/google-logo.png"
import logo3 from "/src/assets/logo/netflix-logo.png"
import logo4 from "/src/assets/logo/paypal-logo.png"
import logo5 from "/src/assets/logo/pg-logo.png"

function TrustedBy() {
  return (
	<div className='trustedby'>
		<div className="container">	
			<span>Trusted by:</span>
			<img src={logo1}></img>
			<img src={logo2}></img>
			<img src={logo3}></img>
			<img src={logo4}></img>
			<img src={logo5}></img>
		</div>
	</div>
  )
}

export default TrustedBy