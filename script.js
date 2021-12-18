////////////////////////////////
// Typing Effect in Hero
const texts = ['Product Owner', 'Project Manager'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// IIFE to call the function immediately
(function type() {
    if(count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    };

    setTimeout(type, 500);
}());