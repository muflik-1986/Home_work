document.querySelector('.js-button').addEventListener('click', showRandomPicture);
showRandomPicture();

function getRandomInteger(min, max) {
    let num = Math.floor(min + Math.random() * (max + 1 - min));
    return num;
}

function showRandomPicture() {
    let box = document.querySelector('.box');
    let myPic = document.querySelector('.js-picture');
    myPic.classList.add('picture');
    let randomPicture = getRandomInteger(1, 9);
    myPic.setAttribute('src', `img/${randomPicture}.jpg`);
    box.appendChild(myPic);
}

