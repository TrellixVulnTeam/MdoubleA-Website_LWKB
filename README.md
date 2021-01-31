## Hello

I'm Michael (MdoubleA) and this is the architecture of an internet space for experimentation, and exploration of various web technologies.<br/>
**See it here:** https://mdoublea.info.

### Technologies and Credits

* Hugging Faces's [API](https://huggingface.co/transformers/model_doc/gpt.html) to OpenAI's GPT.<br/>
* [Flask](https://flask.palletsprojects.com/).<br/>
* [ReactJS](https://reactjs.org/).<br/>
* Google's Material Design [icons](https://material.io/resources/icons/?style=baseline).<br/>

### Installation

0. Install tech stack; Python(3.8.3), Flask(1.1.2), Node.js(v12.18.2), and React.js(17.0.1). Version are as of January 2021.

1. Set up and run server.
    1. Enter Server/, then create and activate python virtual environment.
	2. Edit requirments.txt to download proper version of PyTorch based on operating system. For more information see [PyTorch documentation](https://pytorch.org/get-started/locally/).
	3. Install python dependencies: pip install -r requirments.txt.
	4. Download training data and train model: python convaibox.py.
    5. Run Flask app: python api.py.

2. Set up and run client.
	1. Enter Client/ and install dependencies: npm install.
	2. Create a file called ".env.local" with the line "REACT_APP_SERVER_PATH='http://0.0.0.0:5000/api/respond'".
	3. Run React app: npm start.
