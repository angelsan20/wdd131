const form = document.getElementById('2x1Home-form');
const counterElement = document.getElementById('counter');

let counter = parseInt(localStorage.getItem('surveyCount')) || 0;

counterElement.textContent = `Submitted surveys: ${counter}`;

form.addEventListener('submit', () => {
  
  counter++;

  
  localStorage.setItem('surveyCount', counter);

  
  counterElement.textContent = `Submitted surveys: ${counter}`;
});