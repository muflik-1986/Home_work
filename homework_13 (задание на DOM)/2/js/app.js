document.querySelector('.js-btn--first').addEventListener('click', getLink);
document.querySelector('.js-btn--second').addEventListener('click', redirectLink);

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

let link;
function getLink() {
    do {
        link = prompt('Введите ссылку!');
    } while (link === '' || isNumeric(link));
    if (!link.startsWith('https://') || !link.startsWith('http://')) {
        link = 'https://' + link;
    }
}

function redirectLink() {
    if (link) {
        location.href = link;
    }
}
