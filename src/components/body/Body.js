import React from 'react';
import profilePicture from './SecondBest.jpg';


const About = () => {
	return (
		<div className="about-me">
			<div className="about-me-text">
				<h1>About me</h1>
				<p className="about-me-text-greeting">Hello, I'm Michael and I like creating.</p>
				<p className="about-me-text-body">
					I'm a software engineer in Vancouver, Washington and I currently attend Portland State University.<br/>
					I'll graduate at the end of Fall 2020, at which point I'll pursue a career in software development and validation.
					<br/><br/>
					I like making things; cooking, gardening, and programming all deeply satisfy me.<br/>
					In my software development practice, I aim to build dependable, well tested technologies and I aim to be adaptable and welcoming to new technologies and paradigms.
				</p>
			</div>

			<img src={profilePicture} alt="me" className="about-me-picture"/>
		</div>
	)
};

const Body = () => {
	const [height, setHeight] = React.useState({
		height: window.innerHeight
	});

	React.useEffect(() => {
		function handleResize() {
			setHeight({height: window.innerHeight})
		}
		window.addEventListener('resize', handleResize)
	});

	return (
		<div className="my-body" width={height}>
			<About />
		</div>
	);
};

export default Body;
