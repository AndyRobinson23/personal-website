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