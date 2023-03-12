//get svg and set its viewBox to the size of the window 
var svg = document.querySelector('svg');

svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

//// set x and y of the svg's text to the center of the window
var bg_letter = document.querySelector('.bg-letter');
bg_letter.setAttribute('x', window.innerWidth / 2-5*window.innerWidth/100);
bg_letter.setAttribute('y', window.innerHeight / 2+10*window.innerHeight/100);

var bg_img = document.querySelector('.bg-img');

// hide description-1 and reveal the .description-2 element gradually as mouse moves to the right
var description_2 = document.querySelector('.description-2');
var description_1 = document.querySelector('.description-1');

window.addEventListener('mousemove', function(e) {
    if(e.clientX<window.innerWidth/2-window.innerWidth/4){
        description_1.style.opacity = 1;
        description_2.style.opacity = 0;
    }
    else if(e.clientX>window.innerWidth/2+window.innerWidth/4){
        description_1.style.opacity = 0;
        description_2.style.opacity = 1;
    }
    else{
    var x = (e.clientX - window.innerWidth/2+window.innerWidth/4) / (window.innerWidth/4);
    description_1.style.opacity = 1 - x;
    description_2.style.opacity = x;
    }
    //move bg-img to the right as mouse moves to the right
    var val=10+0.5*e.clientX/window.innerWidth;
    bg_img.style.transform = 'translateX(-'+val+'%)';
    console.log(e.clientX);
    });



