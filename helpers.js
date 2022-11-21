// Методы строки:

// - метод поиска подстроки в строке (indexOf):
function deleteFirstStrLetter(string, letter) {
    let indexToDelete = string.indexOf(letter);
    if (indexToDelete === -1) {
        return string;
    }
    return deleteStrIndex(string, indexToDelete);
}

// - метод возвращение подстроки в строке (slice)
function deleteStrIndex(string, indexToDelete) {
    return string.slice(0, indexToDelete) + string.slice(indexToDelete + 1);
}

// - метод определения с чего начинается строка (startsWith)
function getLink() {
    do {
        link = prompt('Введите ссылку!');
    } while (link === '' || isNumeric(link));
    if (!link.startsWith('https://') || !link.startsWith('http://')) {
        link = 'https://' + link;
    }
}




// Функции:

// - функция вывода случайного числа:
function getRandomInteger(min, max) {
    let num = Math.floor(min + Math.random() * (max + 1 - min));
    return num;
}

//  - функция проверки является ли числом:
function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}