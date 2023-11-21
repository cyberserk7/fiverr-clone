import React from 'react'
import "./TrustedBy.scss"

function TrustedBy() {
  return (
	<div className='trustedby'>
		<div className="container">	
			<span>Trusted by:</span>
			<img src='/src/assets/logo/meta-logo.png'></img>
			<img src='/src/assets/logo/google-logo.png'></img>
			<img src='/src/assets/logo/netflix-logo.png'></img>
			<img src='/src/assets/logo/paypal-logo.png'></img>
			<img src='/src/assets/logo/pg-logo.png'></img>
		</div>
	</div>
  )
}

export default TrustedBy