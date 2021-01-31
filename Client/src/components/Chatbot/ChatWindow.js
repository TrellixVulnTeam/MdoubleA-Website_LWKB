import React, { useState } from 'react';
import avatar from './MrsWarren.png';


const ChatWindow = ({setParentMessage, history, chatlabels}) => {
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setParentMessage(message);
		setMessage('');
	};

	const messages = history.map((msg, index) =>
		<div className="income-msg" key={index}>
		  {chatlabels[index] === "ai" && <img src={avatar} className="avatar" alt="" />}
		  {index !== 0 && <span className="msg" id={chatlabels[index]}>{msg}</span>}
		</div>
	);

	return (
		<div className="chat-popup">
			<div className="chat-area">{messages}</div>

			<div className="input-area">
			    <input
				  type="text"
				  value={message}
				  onChange={e => setMessage(e.target.value)}
				  placeholder={"Type message."} />
				<button className="submit" onClick={handleSubmit}><i className="material-icons">send</i></button>
			</div>
		</div>
	);
};

export default ChatWindow;
