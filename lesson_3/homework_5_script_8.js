// Вариант 1
let numberGeneralFromUser = +prompt('Введите шестизначное число');
let numberFromUser6 = numberGeneralFromUser % 10;
let numberFromUser5 = (numberGeneralFromUser % 100 - numberFromUser6) / 10;
let numberFromUser4 = ((numberGeneralFromUser % 1000) - +(String(numberFromUser5) + String(numberFromUser6))) / 100;
let numberFromUser3 = ((numberGeneralFromUser % 10000) - +(String(numberFromUser4) + String(numberFromUser5) + String(numberFromUser6))) / 1000;
let numberFromUser2 = ((numberGeneralFromUser % 100000) - +(String(numberFromUser3) + String(numberFromUser4) + String(numberFromUser5) + String(numberFromUser6))) / 10000;
let numberFromUser1 = ((numberGeneralFromUser % 1000000) - +(String(numberFromUser2) + String(numberFromUser3) + String(numberFromUser4) + String(numberFromUser5) + String(numberFromUser6))) / 100000;

if (numberFromUser6 === numberFromUser1 && numberFromUser5 === numberFromUser2 && numberFromUser4 === numberFromUser3) {
    alert (`Введенное число (${numberGeneralFromUser}) зеркальное!`)
}  else {
    alert (`Введенное число (${numberGeneralFromUser}) НЕ зеркальное`);
}

// Вариант 2
let numberGeneral = +prompt('Введите шестизначное число');
let number6 = numberGeneral % 10;
let number5 = (numberGeneral % 100 - number6) / 10;
let number4 = ((numberGeneral % 1000) - +(String(number5) + String(number6))) / 100;
let number3 = ((numberGeneral % 10000) - +(String(number4) + String(number5) + String(number6))) / 1000;
let number2 = ((numberGeneral % 100000) - +(String(number3) + String(number4) + String(number5) + String(number6))) / 10000;
let number1 = ((numberGeneral % 1000000) - +(String(number2) + String(number3) + String(number4) + String(number5) + String(number6))) / 100000;

number6 === number1 && number5 === number2 && number4 === number3 ? alert ('Введенное число зеркальное!') : alert ('Введенное число НЕ зеркальное');
