// DO NOT deploy this API key or upload onto GitHub
const API_KEY = 'your-api-key-here';
const submitButton = document.querySelector('#submit');
const outputElement = document.querySelector('#output');
const inputElement = document.querySelector('input');
const historyElement = document.querySelector('.history');

function changeInput(value) {
    inputElement.value = value;
}

async function getMessage() {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
        })
    };
    try {
        const response = await fetch('https://api.openai.com/v1/completions', options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            outputElement.textContent = data.choices[0].message.content; // Corrected the path to access message content
            const pElement = document.createElement('p');
            pElement.textContent = inputElement.value;
            pElement.addEventListener('click', () => changeInput(pElement.textContent));
            historyElement.append(pElement);
        } else {
            outputElement.textContent = "No response data available";
        }
    } catch (error) {
        console.error(error);
        outputElement.textContent = `Error: ${error.message}`; // Display the error message in the output element
    }
}

submitButton.addEventListener('click', getMessage); // Corrected variable name for event listener

const clearButton = document.querySelector('#clear');
submit.addEventListener('click', () => {
    inputElement.value = '';
    outputElement.textContent = '';
});
