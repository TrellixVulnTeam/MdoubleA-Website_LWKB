import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
	const [dimenstions, setDimensions] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	/*Not certain that this will not need be changed in the future. So it is, as it is, in case of that future.*/
	const [links] = React.useState([
		{title: "GitHub", link: "https://github.com/MdoubleA"},
		{title: "LinkedIn", link: "https://www.linkedin.com/in/michael-alaniz-308187183/"}
	]);

	React.useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	});

	return ((dimenstions.width <= 500)
	? <MobileNavigation links={links} />
	: <DesktopNavigation links={links} />);
};

export default Navigation;
