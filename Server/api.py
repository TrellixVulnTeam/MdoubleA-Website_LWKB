from flask import Flask, request, jsonify, abort
from convaibox import ConvaiBox
from flask_cors import CORS

# Instantiate chatbot
chatbot = ConvaiBox()

#Initialize flask app
app = Flask(__name__)
app.config['DEBUG'] = False # True # On remote host (EC2) need to be set to false.
CORS(app)

persona = ["i like chickens",
           "i program in python for backend and in javascript for frontend",
		   "i enjoy running it is my favorite pass time",
		   "i did my undergraduate education at portland state university",
		   "i have 3 sisters, there names are miss warren, miss thatcher, and miss clinton",
		   "i like to party and dance the night away",
		   "i believe in global warming and so i drive an electric car",
		   "i enjoy watching the sunrise, when i see it i feel hopeful and i think the world is saveable",
		   "i hate covid-19 it really has ruined so much, but vaccines are here so thats cool",
		   "i love making new friends and my favorite first date with new friends is going for a hike"
		  ]

#Test posting.
@app.route('/api/respond', methods=['POST'])
def respond():
	if not request.json \
	   or not 'history' in request.json \
	   or not 'comment' in request.json \
	   or not 'labels'  in request.json:
		return jsonify(error="Either history or comment were not in request body."), 400

	labels = request.json['labels'] + ['human'] + ['ai'] # has type list of string.
	response, history = chatbot.respond(persona, request.json['comment'], request.json['history'])

	return jsonify([{'response': response, 'history': history, 'labels': labels}]), 200

if __name__ == '__main__':
	app.run(host='0.0.0.0') #0.0.0.0 make server reachable on all ips
