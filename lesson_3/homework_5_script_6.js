
let numberGeneral = +prompt('Введите трьехзначное число');
let number3 = numberGeneral % 10;
let number2 = (numberGeneral - number3) / 10 % 10;
let number1 = ((numberGeneral - number3) / 10 - number2) / 10;

let numberSum = number1 + number2 + number3;
if (numberSum % 2 === 0) {
    alert (`Сумма цифр (${numberSum}) является четной`);
} else {
    alert (`Сумма цифр (${numberSum}) НЕ является четной`);
}

if (numberSum % 5 === 0) {
    alert (`Сумма цифр (${numberSum}) является кратной 5`);
} else {
    alert (`Сумма цифр (${numberSum}) НЕ является кратной 5`);
}

let numberMultipl = number1 * number2 * number3;
if (numberMultipl > 100) {
    alert (`Производное цифр (${numberMultipl}) БОЛЬШЕ 100`);
} else if (numberMultipl < 100) {
    alert (`Производное цифр (${numberMultipl}) МЕНЬШЕ 100`);
} else {
    alert (`Производное цифр (${numberMultipl}) = 100`);
}














