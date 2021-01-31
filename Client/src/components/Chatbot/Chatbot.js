import React, { useState, useEffect } from 'react';
import './Body.css';
import ChatWindow from './ChatWindow';
import avatar from './MrsWarren.png';

// Network path to backend server, the HuggingFace chatbot.
const serverPath = process.env.REACT_APP_SERVER_PATH;

const ChatButton = ({showChat, setShowChat}) => {
	const handleClick = (event) => {
		event.preventDefault();
		setShowChat(!showChat);
	}

	return (
		<div className="chat-button-container">
			<div>
				<h3 className="chat-header">Care to talk to a chicken?</h3>
				<p>Be patient, she's a bit slow . . . and odd . . .</p>
			</div>
			<button className="chat-button" onClick={handleClick}>
				<img src={avatar} className="chat-button-icon" alt="" />
				<div className="chat-button-badge"><i className="material-icons">chat</i></div>
			</button>
		</div>
	)};

const Chatbot = () => {
	const [message, setMessage] = useState(['']);
	const [history, setHistory] = useState([]);
	const [labels, setLabels] = useState([]);
	const [showChat, setShowChat] = useState(false);

	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({history: history, comment: message, labels: labels})
	};

	useEffect(() => {
		async function fetchData() {
			if (message) {
				const res = await fetch(serverPath, requestOptions);
				const data = await res.json();
				console.log(data);

				setHistory(data[0].history);
				setLabels(data[0].labels);
			}
		};

		fetchData();
	}, [message]); // gives ignorable warning: eslint-disable-line react-hooks/exhaustive-deps.

	return (
		<div className="chatbot-stuff">
			{showChat && <ChatWindow setParentMessage={setMessage} history={history} chatlabels={labels}/>}
			<ChatButton showChat={showChat} setShowChat={setShowChat}/>
		</div>
	)
};

export default Chatbot;
