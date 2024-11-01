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
        image: "http://ldsminds.com/wp-content/uploads/2015/08/thomasbholman.jpg",
        url: "https://www.churchofjesuschrist.org/study/ensign/2002/09/choosing-and-being-the-right-spouse?lang=eng#note_no_marker001"
    },
];

function displayMessages() {
    const messagesSection = document.querySelector('.messages-section');
    messagesSection.innerHTML = "";
    
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        messageDiv.innerHTML = `
            <img src="${message.image}" alt="${message.speaker}" loading="lazy">
            <p><a href="${message.url}" target="_blank">${message.messageTitle}</a></p>
            <p>${message.speaker}</p>
        `;
        
        messagesSection.appendChild(messageDiv);
    });
}

     
        document.addEventListener('DOMContentLoaded', displayMessages);