const texts = [
    { text: "DESIGNER", color: "#8E7AB5" },
    { text: "DEVELOPER", color: "#E1AFD1" },
    { text: "STUDENT", color: "#7469B6" },
    {text: "GUITARIST", color: "#B99470"},
    {text: "ARTIST", color: "#B0A695"}
];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100;
const delayBetweenTexts = 1000;
const typingTextElement = document.getElementById('typing-text');
let isTyping = true;

function type() {
    if (isTyping) {
        if (currentCharIndex < texts[currentTextIndex].text.length) {
            typingTextElement.innerHTML += `<span style="color: ${texts[currentTextIndex].color};">${texts[currentTextIndex].text.charAt(currentCharIndex)}</span>`;
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            currentTextIndex++;
            if (currentTextIndex < texts.length) {
                setTimeout(() => {
                    typingTextElement.innerHTML = ''; // Clear the current text
                    currentCharIndex = 0;
                    type();
                }, delayBetweenTexts);
            } else {
                currentTextIndex = 0; // Reset to the first text
                setTimeout(() => {
                    typingTextElement.innerHTML = ''; // Clear the current text
                    currentCharIndex = 0;
                    type();
                }, delayBetweenTexts);
            }
        }
    }
}

function checkVisibility() {
    const rect = typingTextElement.getBoundingClientRect();
    const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (inViewport) {
        if (!isTyping) { // Resume typing if it was paused
            isTyping = true;
            type();
        }
    } else {
        isTyping = false; // Pause typing
    }
}

window.addEventListener('scroll', checkVisibility);

// Initial call to start the typing effect
type();

document.querySelectorAll(".circle").forEach((circle) => {
    circle.classList.add("to-box");
});


// Select the text you want to make it circular
const text = document.querySelector(".circular-text .text")

// Make the selected text circler with CircleType
// you can find the full docs here: https://circletype.labwire.ca/
const rotate = new CircleType(text).radius(65)

// Add a scroll listener to the window object and rotate the selected text according to the scroll
// we used * 0.15 to make the rotation looks smoother
window.addEventListener("scroll", function(){
  text.style.transform=`rotate(${window.scrollY * 0.15}deg)`
})

window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card');
  const scrollPosition = window.scrollY;
  cards.forEach((card, index) => {
      if (scrollPosition > (index * 200)) {
          card.style.setProperty('--scroll-pos', scrollPosition - (index * 200));
          card.classList.add('show');
      } else {
          card.style.setProperty('--scroll-pos', 0);
          card.classList.remove('show');
      }
  });
});

window.addEventListener('scroll', function() {
    var meContainer = document.querySelector('.me');
    var positionFromTop = meContainer.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight < 0) {
        meContainer.classList.add('show');
    } else {
        meContainer.classList.remove('show');
    }
});