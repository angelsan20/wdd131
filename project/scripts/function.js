//Toggle Menu Function Script

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    }
});

//Messages Section Function Script

const messages = [
    {
        messageTitle: "Nurturing Marriage",
        speaker: "Elder Russell M. Nelson",
        image: "https://www.lds.org/bc/content/shared/content/images/gospel-library/magazine/en2006lp.nfo:o:61.jpg",
        url: "https://www.churchofjesuschrist.org/study/liahona/2006/05/nurturing-marriage?lang=eng"
    },
    {
        messageTitle: "Don’t Be a Cold-Gravy Spouse",
        speaker: "Mark Clayton",
        image: "https://churchofjesuschrist.org/imgs/f0a22b3b309488ee84e5366177cd14883788d6d0/full/640%2C/0/default",
        url: "https://www.churchofjesuschrist.org/study/ensign/2018/10/dont-be-a-cold-gravy-spouse?lang=eng"
    },
    {
        messageTitle: "Choosing and Being the Right Spouse",
        speaker: "Thomas B. Holman",
        image: "https://ldsminds.com/wp-content/uploads/2015/08/thomasbholman.jpg",
        url: "https://www.churchofjesuschrist.org/study/ensign/2002/09/choosing-and-being-the-right-spouse?lang=eng#note_no_marker001"
    },
];

function displayMessages() {
    const messagesSection = document.querySelector('.messages-section');
    messagesSection.innerHTML = messages.map(message => `
        <div class="message">
            <img src="${message.image}" alt="${message.speaker}" loading="lazy">
            <p><a href="${message.url}" target="_blank">${message.messageTitle}</a></p>
            <p>--${message.speaker}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', displayMessages);


//Quotes Section Function Script

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
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const quoteSection = document.querySelector('.quote-section');
    const { quote, speaker, image, alt } = getRandomQuote();
    
    quoteSection.innerHTML = `
        <img src="${image}" alt="${alt}" loading="lazy">
        <div class="quote-text">
            <p class="p-quote">"${quote}"</p>
            <p class="p-speaker">--${speaker}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuote();
    setInterval(displayQuote, 24 * 60 * 60 * 1000);
});

// Form send to email functionality script
//  this script uses the “EmailJS” web service so as not to reveal any information about the web creator.

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.init('81jNEkDp6fDGgLfWj');

    const formData = {
        contact_reason: document.getElementById('contact-reason').value,
        contact_message: document.getElementById('contact-message').value,
        contact_name: document.getElementById('contact-name').value,
        contact_email: document.getElementById('contact-email').value,
    };

    emailjs.send('service_is4cvha', 'template_0apxhu8', formData)
        .then(function(response) {
            alert('Form submitted successfully!');
            window.location.href = 'review2x1.html';
        }, function(error) {
            alert('An error occurred. Please try again.');
        });
});
