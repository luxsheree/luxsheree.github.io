// script.js
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Ask again later, I'm on a coffee break.",
    "Yes, definitely. Just kidding, I have no idea.",
    "404 Error: Answer not found.",
    "Sure, the answer is... Wait, what was the question again?",
    "My sources say no, but they also said I'd win the lottery.",
    "Outlook hazy, try waving a magic wand.",
    "Concentrate and ask again, and this time with more enthusiasm!",
    "Yes, no, maybe? I'm just a ball, not a fortune teller!",
    "In a parallel universe, you wouldn't even need to ask.",
    "Shh, the universe is speaking. Just listen.",
    "The stars are not aligned for answering that, try Netflix instead.",
    "Beep boop, answer loading... Error, try again."
];

const answerElement = document.getElementById('answer');
const askButton = document.getElementById('ask-button');
const questionInput = document.getElementById('question');

askButton.addEventListener('click', () => {
    const question = questionInput.value.trim();
    if (question === '') {
        answerElement.textContent = "Please ask a question.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
});

questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        askButton.click();
    }
});
