const form = document.getElementById('myform');
const counterElement = document.getElementById('counter');

let counter = parseInt(localStorage.getItem('counter')) || 0;

counterElement.textContent = `Total Submissions: ${counter}`;

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    contador++;

    counterElement.textContent = `Total Submissions: ${counter}`;
    localStorage.setItem('counter', counter);

   
});