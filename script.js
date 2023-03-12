//get svg and set its viewBox to the size of the window 
var svg = document.querySelector('svg');

svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

//// set x and y of the svg's text to the center of the window
var bg_letter = document.querySelector('.bg-letter');
bg_letter.setAttribute('x', window.innerWidth / 2-5*window.innerWidth/100);
bg_letter.setAttribute('y', window.innerHeight / 2+10*window.innerHeight/100);

