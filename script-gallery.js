var current = 0; //current artwork

// CONTENT
artwork_details = {
    0: {
        "serial": 0,
        "name": "Held Together",
        "media": "Video",
        "info": "Captivating display of unity and synergy as many small balls are held together in harmony by an inwards force and continous loops of light(hope) protect the unity",
        "src": "./videos/balls_and_balls1_shareable.mp4"

    },
    1: {
        "serial": 1,
        "name": "Coral",
        "media": "Image",
        "info": "Nature's Masterpiece in a sphere, Mesmerizing coral with very detailed texturing, one of the first realistic textures I made.",
        "src": "./images/coral_1.png"
    },
    2: {
        "serial": 2,
        "name": "Furball",
        "media": "Image",
        "info": "Soft long fur shows us how beauty, softness and strength can coexist. Softness can represent resilience, and vulnerability can be a source of power.",
        "src": "./images/furball_2.png"
    },
    3: {
        "serial": 3,
        "name": "Coral leafs",
        "media": "Image",
        "info": "Even the most delicate and fragile organisms can create the most breathtaking beauty. This soft pink and glassy coral is a testament to such beauty and complexity of nature. In the midst of chaos, there cane be a sense of order and balance",
        "src": "./images/coral_2_b.png"
    },
    4: {
        "serial": 4,
        "name": "Knotted_1",
        "media": "Image",
        "info": "Twisted and knotted, yet beautiful and strong. The colorful knots in the Knotted series represent the complexity of life and the beauty of the chaos and our ability to keep that chaos Knotted.",
        "src": "./images/knots_2.png"
    },
    5: {
        "serial": 5,
        "name": "Knotted_2",
        "media": "Image",
        "info": "Twisted and knotted, yet beautiful and strong. The colorful knots in the Knotted series represent the complexity of life and the beauty of the chaos and our ability to keep that chaos Knotted.",
        "src": "./images/knots_1.png"
    },
    6: {
        "serial": 6,
        "name": "Bloom_1",
        "media": "Image",
        "info": "Windows 11 Bloom inspired wallpaper, with a pink, glossy bloom,a sense of playfulness and youthfulness, as well as a hint of elegance and refinement.",
        "src": "./images/bloom_wallpaper_3.png"
    },
}


//make artwork page
function make_artwork_page(art_num) {
    var artwork = document.createElement('div');
    artwork.classList.add('artwork');
    artwork.setAttribute('id', 'artwork' + artwork_details[art_num].serial);
    var art_main = document.createElement('main');
    var h1 = document.createElement('h1');
    h1.textContent = artwork_details[art_num].name;
    var h2 = document.createElement('h2');
    h2.textContent = artwork_details[art_num].media;
    var p = document.createElement('p');
    p.textContent = artwork_details[art_num].info;

    if (artwork_details[art_num].media == "Video") {
        var video = document.createElement('video');
        video.src = artwork_details[art_num].src;
        video.loop = "true";
        video.autoplay = "true"
        video.muted = "true";
        video.setAttribute('id', 'art' + artwork_details[art_num].serial);
    } else if (artwork_details[art_num].media == "Image") {
        var img = document.createElement('img');
        img.src = artwork_details[art_num].src;
        img.setAttribute('id', 'art' + artwork_details[art_num].serial);
    }

    //create bg svg
    var bg_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    bg_svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);
    bg_svg.classList.add('bg-svg');
    var bg_letter = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    bg_letter.classList.add('bg-letter');
    bg_letter.setAttribute('x', window.innerWidth / 2 - 5 * window.innerWidth / 100);
    bg_letter.setAttribute('y', window.innerHeight / 2 + 10 * window.innerHeight / 100);
    bg_letter.textContent = artwork_details[art_num].name[0];
    var bg_name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    bg_name.classList.add('bg-name');
    bg_name.setAttribute('x', 50);
    bg_name.setAttribute('y', '75vh');
    bg_name.textContent = artwork_details[art_num].name;

    //append elements
    bg_svg.appendChild(bg_letter);
    bg_svg.appendChild(bg_name);
    art_main.appendChild(h1);
    art_main.appendChild(h2);
    art_main.appendChild(p);

    artwork.appendChild(art_main);
    artwork.appendChild(bg_svg);
    document.body.appendChild(artwork);
    if (artwork_details[art_num].media == "Video") {
        artwork.appendChild(video);
    } else if (artwork_details[art_num].media == "Image") {
        artwork.appendChild(img);
    }
}

function remove_artwork_page(art_num) {
    var artwork = document.querySelector('#artwork' + artwork_details[art_num].serial);
    artwork.remove();
}


//create artwork page
make_artwork_page(0);


//CONTROLS

//set artwork number in control btn
var control_btn_num = document.querySelector('.control-btn-num');
control_btn_num.textContent = current + 1;
//query selector on control btn to back artwork
var back_btn = document.querySelector('#control-back');
back_btn.addEventListener('click', function () {
    //remove artwork page
    var artwork = document.querySelector('#artwork' + artwork_details[current].serial);
    artwork.remove();
    current--;
    if (current < 0) {
        current = Object.keys(artwork_details).length - 1;
    }
    //create artwork page
    make_artwork_page(current);
    control_btn_num.textContent = current + 1;
});

//query selector on control btn to next artwork
var next_btn = document.querySelector('#control-next');
next_btn.addEventListener('click', function () {
    //remove artwork page
    var artwork = document.querySelector('#artwork' + artwork_details[current].serial);
    artwork.remove();
    current++;
    if (current >= Object.keys(artwork_details).length) {
        current = 0;
    }
    //create artwork page
    make_artwork_page(current);
    control_btn_num.textContent = current + 1;
});



