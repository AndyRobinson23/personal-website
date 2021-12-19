////////////////////////////////
// Typing Effect in Hero
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add  char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), 500)
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init Typewriter
    new TypeWriter(txtElement, words, wait);
}


// const texts = ['Product Owner', 'Project Manager'];
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// // IIFE to call the function immediately
// (function type() {
//     if(count === texts.length) {
//         count = 0;
//     }

//     currentText = texts[count];
//     letter = currentText.slice(0, ++index)

//     document.querySelector('.typing').textContent = letter;
//     if(letter.length === currentText.length) {
//         count++;
//         index = 0;
//     };

//     setTimeout(type, 300);
// }());


////////////////////////////////
// Smooth Scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Scroll to other links
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});