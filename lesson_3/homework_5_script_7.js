let numberGeneral = +prompt('Введите трьехзначное число');
let number3 = numberGeneral % 10;
let number2 = (numberGeneral - number3) / 10 % 10;
let number1 = (numberGeneral - +(String(number2) + String(number3))) / 100;

if (number1 === number2 && number1 === number3) {
    alert ('Все цифры одинаковы!');
} else if (number1 === number2) {
    alert (`Первая цифра ровняется второй (${number1} = ${number2})!`);
} else if (number2 === number3) {
    alert (`Вторая цифра ровняется третьей (${number2} = ${number3})!`);
} else if (number1 === number3) {
    alert (`Первая цифра ровняется третьей (${number1} = ${number3})!`);
} else {
    alert (`Среди трехзначного числа (${numberGeneral}) нет одинаковых цифр!`);
}