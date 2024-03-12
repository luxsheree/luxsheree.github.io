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
    "33",
    "42",
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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('swatch-container');
    const button = document.getElementById('generate-button');
  
    function generateSwatches(numSwatches = 10) {
      container.innerHTML = ''; // Clear existing swatches
  
      for (let i = 0; i < numSwatches; i++) {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        swatch.style.backgroundColor = color;
        swatch.textContent = color; // Displays the color code on the swatch
        swatch.setAttribute('title', 'Click to copy hex code');
        container.appendChild(swatch);
  
        swatch.addEventListener('click', function() {
          copyToClipboard(this.textContent);
          showCopiedMessage(this);
        });
      }
    }
  
    function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  
    function showCopiedMessage(element) {
      const copiedMessage = document.createElement('span');
      copiedMessage.textContent = 'Copied!';
      copiedMessage.className = 'copied-message';
      element.appendChild(copiedMessage);
  
      setTimeout(() => {
        element.removeChild(copiedMessage);
      }, 1500); // Adjust the duration as needed
    }
  
    // Initial generation of swatches
    generateSwatches();
  
    button.addEventListener('click', () => generateSwatches());
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const fontSelector = document.getElementById('fontSelector');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const fontColorInput = document.getElementById('fontColorInput');
    const bgColorInput = document.getElementById('bgColorInput');
    const previewArea = document.getElementById('previewArea');
  
    fontSelector.addEventListener('change', function() {
      previewArea.style.fontFamily = fontSelector.value;
    });
  
    fontSizeInput.addEventListener('input', function() {
      previewArea.style.fontSize = fontSizeInput.value + 'px';
    });
  
    fontColorInput.addEventListener('change', function() {
      previewArea.style.color = fontColorInput.value;
    });
  
    bgColorInput.addEventListener('change', function() {
      previewArea.style.backgroundColor = bgColorInput.value;
    });
  });
  