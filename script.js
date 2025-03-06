const titles = [
    "Live Character Tally",
    "Instant Character Count",
    "Dynamic Text Counter",
    "Character Count Tracker",
    "Live Typing Gauge",
    "Active Character Meter",
    "Real-Time Text Tracker",
    "On-the-Fly Char Count"
];

const placeholders = [
    "What's on your mind today?",
    "Share your thoughts here...",
    "Write a message, a poem, or just vent!",
    "Need a character count feedback as you type? I got this.",
    "Unleash your creativity...",
    "Start typing to see the magic..."
];

const randomTitle = titles[Math.floor(Math.random() * titles.length)];
const appTitle = document.getElementById('app-title');
appTitle.textContent = randomTitle;

const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.placeholder = randomPlaceholder;

textInput.addEventListener('input', () => {
    let currentCount = textInput.value.length;

    if (currentCount > 500) {
        textInput.value = textInput.value.substring(0, 500);
        currentCount = 500;
    }

    charCount.textContent = `Character Count: ${currentCount}/500`;

    if (currentCount === 500) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = 'black';
    }
});