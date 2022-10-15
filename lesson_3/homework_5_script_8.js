// Вариант 1. Через тернарный оператор "?"
let numberGeneral = +prompt('Введите шестизначное число');
let number6 = numberGeneral % 10;
let number5 = (numberGeneral % 100 - number6) / 10;
let number4 = ((numberGeneral % 1000 - number6) / 10 - number5) /10;
let number3 = (((numberGeneral % 10000 - number6) / 10 - number5) / 10 - number4) / 10;
let number2 = ((((numberGeneral % 100000 - number6) / 10 - number5) / 10 - number4) / 10 - number3) / 10;
let number1 = (((((numberGeneral - number6) / 10 - number5) / 10 - number4) / 10 - number3) / 10 - number2) / 10;

number6 === number1 && number5 === number2 && number4 === number3 ? alert (`Введенное число (${numberGeneral})зеркальное!`) : alert (`Введенное число (${numberGeneral}) НЕ зеркальное`);

// Вариант 2. Через "if, else"
let numberGeneralFromUser = +prompt('Введите шестизначное число');
let numberFromUser6 = numberGeneralFromUser % 10;
let numberFromUser5 = (numberGeneralFromUser % 100 - numberFromUser6) / 10;
let numberFromUser4 = ((numberGeneralFromUser % 1000 - numberFromUser6) / 10 - numberFromUser5) /10;
let numberFromUser3 = (((numberGeneralFromUser % 10000 - numberFromUser6) / 10 - numberFromUser5) / 10 - numberFromUser4) / 10;
let numberFromUser2 = ((((numberGeneralFromUser % 100000 - numberFromUser6) / 10 - numberFromUser5) / 10 - numberFromUser4) / 10 - numberFromUser3) / 10;
let numberFromUser1 = (((((numberGeneralFromUser - numberFromUser6) / 10 - numberFromUser5) / 10 - numberFromUser4) / 10 - numberFromUser3) / 10 - numberFromUser2) / 10;

if (numberFromUser6 === numberFromUser1 && numberFromUser5 === numberFromUser2 && numberFromUser4 === numberFromUser3) {
    alert (`Введенное число (${numberGeneralFromUser}) зеркальное!`)
}  else {
    alert (`Введенное число (${numberGeneralFromUser}) НЕ зеркальное`);
}