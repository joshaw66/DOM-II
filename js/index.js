// Your code goes here

// Selectors

const nav = document.querySelector('.main-navigation');

const body = document.querySelector('body');

const header2 = document.querySelector('h2');

const footer = document.querySelector('.footer p');

const intro = document.querySelector('.intro img');

const image2 = document.getElementsByTagName('img')[2];

const header = document.getElementsByTagName('h2')[0];

const image3 = document.getElementsByTagName('img')[1];

const image4 = document.getElementsByTagName('img')[3];

const navReload = document.querySelector('.nav a');


// MouseOver

nav.addEventListener('mouseover', (event) => {
     event.target.style.backgroundColor = 'lightblue';
     setTimeout(function() {
        event.target.style.backgroundColor = "";
      }, 500);
}, false);

// KeyUp

body.addEventListener('keyup', (event) => {
    body.style.background = 'lightblue';
    setTimeout(function() {
        event.target.style.background = "";
    }, 500);
}, false);

// MouseEnter

footer.addEventListener('mouseenter', (event) => {
    footer.style.color = 'aqua';
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// DoubleClick

intro.addEventListener('dblclick', (event) => {
    intro.style.display = 'none';
    setTimeout(function() {
        event.target.style.display = "";
    }, 500);
}, false);

// Click 

image2.addEventListener('click', (event) => {
    image2.style.display = 'none';
    setTimeout(function() {
        event.target.style.display = "";
    }, 500);
}, false);

// MouseMove

header.addEventListener('mousemove', (event) => {
    header.style.color = 'yellow';
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// MouseUp

image3.addEventListener('mouseup', (event) => {
    image3.style.opacity = '0';
    setTimeout(function() {
        event.target.style.opacity = "";
    }, 500);
}, false);

// Wheel

image4.addEventListener('wheel', (event) => {
    image4.style.opacity = '.5';
    setTimeout(function() {
        event.target.style.opacity = "";
    }, 500);
}, false);

// KeyDown

body.addEventListener('keydown', (event) => {
    body.style.background = 'tan';
    event.stopPropagation();
})

// Load

window.addEventListener("load", function(event) {
    alert("The page has now loaded");
    });

// Stop Nav Reload

navReload.addEventListener('click', function(e) {
  e.preventDefault();
})






