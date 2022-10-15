let number = +prompt('Введите число');
if (number % 2 === 0) {
    alert ('Число является четным!');
} else {
    alert ('Число является НЕчетным!');
}
alert (`Последняя цифра: ${number % 10}`);
