import React from 'react'
import { createPortal } from 'react-dom'
import './overlay.css';
import DesktopGraphic from './assets/non_responsive_vector.svg'

const NonResponsiveOverlay = () => {
	const portalContent = (
		<div className='overlay stretch-to-screen'>
			<div className='container stretch-to-screen'>
				<div className='content'>
					<img
						src={DesktopGraphic}
						alt="Open in desktop graphic"
						className='vector-image'
					/>
					<span className='description-text text-large'>
						For the best viewing experience, please open this website on a
						desktop
					</span>
				</div>
			</div>
		</div>
	)

	return createPortal(portalContent, document.body, 'portal-overlay-content')
}

export default NonResponsiveOverlay
