import React from 'react';
import profilePicture from './SecondBest.jpg';
import Chatbot from '../Chatbot/Chatbot';


const About = () => {
	return (
		<div className="about-me">
			<div className="about-me-text">
				<h1>About me</h1>
				<p className="about-me-text-greeting">Hello, I'm Michael, how're you today?</p>
				<p className="about-me-text-body">
					I'm a software engineer in Vancouver, Washington.<br/>
					I graduated from Portland State University in Fall 2020 with a Bachelor's in Computer Science.
					<br/><br/>
					I like making things; cooking, gardening, and programming are all deeply satisfying.
					<br/><br/>
					In my software development practice, I strive to build dependable, well tested technologies that look as good as they'll last.
					<br/><br/>
					Providing for my flock of chickens, a growh mindset, and a constant curiosity drive my actions in life.
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
			{/*Here goes chatbot*/}
			<Chatbot />
		</div>
	);
};

export default Body;
