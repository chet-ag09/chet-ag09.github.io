const cursor = document.getElementById('circularcursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const delay = 0.2; // Adjust delay for smoother movement
let isCursorClicked = false; // Flag for click state

function animateCursor() {
  // Update cursor position based on mouse movement
  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;

  // Update cursor position with scroll offset
  if (cursor) {
    cursor.style.left = (cursorX + window.scrollX) + 'px';
    cursor.style.top = (cursorY + window.scrollY) + 'px';
  }

  // Request next animation frame
  requestAnimationFrame(animateCursor);
}

// Start cursor animation loop
animateCursor();

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.body.addEventListener('mousedown', function() {
  isCursorClicked = true;
  cursor.style.width = (cursor.offsetWidth - 10) + 'px';
  cursor.style.height = (cursor.offsetHeight - 10) + 'px';
});

document.body.addEventListener('mouseup', function() {
  isCursorClicked = false;
  cursor.style.width = '70px'; // Reset to default width
  cursor.style.height = '70px'; // Reset to default height
});

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('no-cursor');
}

document.querySelectorAll('h1').forEach(function(header) {
  header.addEventListener('click', function() {
    const currentLetterSpacing = window.getComputedStyle(this).letterSpacing;
    const numericLetterSpacing = currentLetterSpacing === 'normal' ? 0 : parseFloat(currentLetterSpacing);

    this.style.letterSpacing = '10px';

    setTimeout(() => {
      this.style.letterSpacing = numericLetterSpacing === 0 ? 'normal' : '0px';
    }, 100); // Adjust delay to match transition duration
  });
});