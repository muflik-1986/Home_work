let number = +prompt('Введите число');
if (number % 2 === 0) {
    alert ('Число является четным!');
    alert (`Последняя цифра: ${number % 10}`);
} else {
    alert ('Число является НЕчетным!');
    alert (`Последняя цифра: ${number % 10}`);
}
