import React from 'react';
import Navigation from '../navigation/Navigation';
import Logo from './Logo.svg';


const Header = () => {
	return (
		<header className="header" >
			<img src={Logo} alt="logo" className="logo" />
			<Navigation />
		</header>
	);
};

export default Header;
