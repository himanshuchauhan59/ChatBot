import { createElement } from './renderer.js';

document.getElementById("askQuestion").addEventListener("click", () => {
    askQuestion()
})

async function askQuestion() {
    const question = document.getElementById('question').value;
    createElement("user", question);
    console.log("question", question);
    document.getElementById('question').value = ""
    const response = await fetch('/askQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });
    
    response.json().then(data => {
        createElement("bot", data[0].text);
        // console.log(data);
    });
}

