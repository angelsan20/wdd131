const form = document.getElementById('myform');
const counterElement = document.getElementById('counter');

let counter = parseInt(localStorage.getItem('surveyCount')) || 0;

counterElement.textContent = `Encuestas enviadas: ${counter}`;

form.addEventListener('submit', () => {
  
  counter++;

  
  localStorage.setItem('surveyCount', counter);

  
  counterElement.textContent = `Encuestas enviadas: ${counter}`;
});