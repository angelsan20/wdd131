const quotes = [
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
    {
        quote: "Marriage is a gift from God to us; the quality of our marriages is a gift from us to Him.",
        speaker: "L. Whitney Clayton",
        image: "https://www.churchofjesuschrist.org/imgs/71387a567147fb0080baa99b008dcb54099e9eef/full/!320%2C400/0/default",
        alt: "L. Whitney Clayton"
    },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quoteSection = document.querySelector('.quote-section');
    const quoteData = getRandomQuote();
    
    quoteSection.innerHTML = `
        <img src="${quoteData.image}" alt="${quoteData.alt}">
        <h2>"${quoteData.quote}"</h2>
        <p>${quoteData.speaker}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuote();
    setInterval(displayQuote, 24 * 60 * 60 * 1000);
});
