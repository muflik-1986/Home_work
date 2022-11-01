function getString() {
    let string;
    do {
        string = prompt('Введите строку');
    } while (!(String(string)));
    return string;
}

function getCountOfElements() {
    let arrLength;
    do {
        arrLength = +prompt('Сколько букв проверять?');
    } while (!(Number(arrLength)));
    return arrLength;
}

function getElementsOfArr(quantityOfLetters) {
    let arr = [];
    for (i = 0; i < quantityOfLetters; i++) {
        let element = prompt(`Введите ${i + 1 + '-ую'} букву`);
        arr.push(element);
    }
    return arr;
}

function cutSymbol(string, letters) {
    let result = string;
    for (i = 0; i < letters.length; i++) {
        result = deleteAllStrLetter(result, letters[i]);
    }
    return result;
}

function deleteAllStrLetter(string, letter) {
    let result = string;
    while (result.indexOf(letter) !== -1) {
        result = deleteFirstStrLetter(result, letter);
    }
    return result;
}

function deleteFirstStrLetter(string, letter) {
    let indexToDelete = string.indexOf(letter);
    if (indexToDelete === -1) {
        return string;
    }
    return deleteStrIndex(string, indexToDelete);
}

function deleteStrIndex(string, indexToDelete) {
    return string.slice(0, indexToDelete) + string.slice(indexToDelete + 1);
}

let stringFromUser = getString();
let quantityOfLetters = getCountOfElements();
let arrFromUser = getElementsOfArr(quantityOfLetters);

result = cutSymbol(stringFromUser, arrFromUser);
console.log(result);