# JavaScript ChatGPT 

This project is a simple clone of OpenAI's ChatGPT, implemented in JavaScript. It uses the OpenAI API to generate responses to user input.

## Project Structure

The project consists of two main files:

- `index.html`: This is the main HTML file that structures the chat interface.
- `app.js`: This is the JavaScript file that handles the interaction with the OpenAI API and updates the chat interface.

## How It Works

When a user types a message into the input field and clicks the submit button, the `getMessage` function in `app.js` is triggered. This function sends a POST request to the OpenAI API with the user's message and receives a response from the GPT-3 model. The response is then displayed in the chat interface.

The history of the chat is maintained in the `.history` div. Clicking on a message in the history will populate the input field with that message.

## Setup

To run this project, you will need to replace `'your-api-key-here'` in `app.js` with your actual OpenAI API key.

Please note that this API key should be kept secret. Do not expose it in publicly accessible areas such as GitHub.

## Usage

Open `index.html` in your web browser to start the chat interface.

## Note

This project is a simple demonstration and does not include features such as user authentication or persistent chat history. It is not intended for production use.

## Author

Subash Rai
