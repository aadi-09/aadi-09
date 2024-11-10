from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Basic knowledge database (based on your HTML content)
information = {
    "who is Carl Sagan": "Carl Edward Sagan was an American astronomer, planetary scientist, cosmologist, astrophysicist, and author.",
    "what did Carl Sagan do": "He is best known for his research on the possibility of extraterrestrial life and the creation of the Voyager Golden Record.",
    "books by Carl Sagan": "Some popular books by Carl Sagan include 'Cosmos', 'The Dragons of Eden', 'Pale Blue Dot', and 'The Demon-Haunted World'.",
    "awards won by Carl Sagan": "Carl Sagan received many awards including the NASA Distinguished Public Service Medal, Pulitzer Prize for General Non-Fiction, and two Emmy Awards.",
    "where did Carl Sagan teach": "Carl Sagan taught at Cornell University and directed the Laboratory for Planetary Studies there."
}

# Route to render the webpage
@app.route('/')
def home():
    return render_template('TributePage.html')

# Chatbot API route
@app.route('/get')
def get_bot_response():
    user_text = request.args.get('msg').lower()
    response = information.get(user_text, "Sorry, I don't have information on that.")
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)