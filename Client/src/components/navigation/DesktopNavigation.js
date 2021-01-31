import React from 'react';


const DesktopNavigation = ({ links }) => {
	return(
		<div className="desktop-nav-container">
			{links.map((link, index) => (
				<div className="desktop-nav-button" key={index}>
						<a href={link.link} id={index} target="_blank" rel="noopener noreferrer">{link.title}</a>
				</div>
			))}
		</div>)
};

export default DesktopNavigation;
