//get svg and set its viewBox to the size of the window 
var svg = document.querySelector('svg');

svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

//// set x and y of the svg's text to the center of the window
var bg_letter = document.querySelector('.bg-letter');
bg_letter.setAttribute('x', window.innerWidth / 2-5*window.innerWidth/100);
bg_letter.setAttribute('y', window.innerHeight / 2+10*window.innerHeight/100);

var current=0;  //current artwork
var artworks = document.querySelectorAll('.artwork');
var artwork_count = artworks.length;

//set bg_letter to first letter of the current artwork
bg_letter.textContent = artworks[current].querySelector('h1').textContent[0];

//set bg_name to the name of the current artwork
var bg_name = document.querySelector('.bg-name');
bg_name.textContent = artworks[current].querySelector('h1').textContent;




