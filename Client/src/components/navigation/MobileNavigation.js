import React from 'react';


const MobileNavigation = ({ links }) => {
	const [menuClicked, setMenuClicked] = React.useState(false);

	return ((menuClicked === false) ?
	<MobileButton links={links} menuClicked={menuClicked} setMenuClicked={setMenuClicked} /> :
	<MobileMenu links={links} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />)
};

const MobileButton = ({ links, menuClicked, setMenuClicked }) => {
		return(
			<div className="mobile-button-container" onClick={e => setMenuClicked(!menuClicked)}>
				<div className="hamburger-bar"></div>
				<div className="hamburger-bar"></div>
				<div className="hamburger-bar"></div>
			</div>
		)
};

const MobileMenu = ({ links, menuClicked, setMenuClicked }) => {
	return (
		<div className="mobile-menu-container" onClick={e => setMenuClicked(!menuClicked)} style={{position: "relative"}}>
			{
				links.map((link, index) => (
					<p className="mobile-menu-item" id={index}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a></p>
				))
			}
		</div>
	)
};

export default MobileNavigation;
