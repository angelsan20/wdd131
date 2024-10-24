const elementcounter = document.getElementById('counter');

let visitors = localStorage.getItem('visitors');

if (visitors === null) {
  visitors = 0;
} else {
  visitors = parseInt(visitors);

  visitors++;
}

localStorage.setItem('visitors', visitors);

elementcounter.textContent = `Number of visitors: ${visitors}`;