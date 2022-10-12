// Вариант 1
let numberGeneral = +prompt('Введите трьехзначное число');
let number3 = numberGeneral % 10;
let number2 = (numberGeneral - number3) / 10 % 10;
let number1 = (numberGeneral - +(String(number2) + String(number3))) / 100;

if ((number1 + number2 + number3) % 2 === 0) {
    alert (`Сумма цифр (${number1 + number2 + number3}) является четной`);
} else {
    alert (`Сумма цифр (${number1 + number2 + number3}) НЕ является четной`);
}

if ((number1 + number2 + number3) % 5 === 0) {
    alert (`Сумма цифр (${number1 + number2 + number3}) является кратной 5`);
} else {
    alert (`Сумма цифр (${number1 + number2 + number3}) НЕ является кратной 5`);
}

if ((number1 * number2 * number3) > 100) {
    alert (`Производное цифр (${number1 * number2 * number3}) БОЛЬШЕ 100`);
} else if ((number1 * number2 * number3) < 100) {
    alert (`Производное цифр (${number1 * number2 * number3}) МЕНЬШЕ 100`);
} else {
    alert (`Производное цифр (${number1 * number2 * number3}) = 100`);
}


// Вариант 2
let number = +prompt('Введите трьехзначное число');
let numberThree = number % 10;
let numberTwo = (number - numberThree) / 10 % 10;
let numberOne = (number - +(String(numberTwo) + String(numberThree))) / 100;

(numberOne + numberTwo + numberThree) % 2 === 0 ? alert (`Сумма цифр (${numberOne + numberTwo + numberThree}) является четной`) : alert (`Сумма цифр (${numberOne + numberTwo + numberThree}) НЕ является четной`);

(numberOne + numberTwo + numberThree) % 5 === 0 ? alert (`Сумма цифр (${numberOne + numberTwo + numberThree}) является кратной 5`) : alert (`Сумма цифр (${numberOne + numberTwo + numberThree}) НЕ является кратной 5`);

if ((numberOne * numberTwo * numberThree) > 100) {
    alert (`Производное цифр (${numberOne * numberTwo * numberThree}) БОЛЬШЕ 100`);
} else if ((numberOne * numberTwo * numberThree) < 100) {
    alert (`Производное цифр (${numberOne * numberTwo * numberThree}) МЕНЬШЕ 100`);
} else {
    alert (`Производное цифр (${numberOne * numberTwo * numberThree}) = 100`);
}
