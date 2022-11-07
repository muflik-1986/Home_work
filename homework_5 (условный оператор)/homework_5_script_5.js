let numberGeneral = +prompt('Введите двухзначное число');
let numberSecond = numberGeneral % 10;
let numberFirst = (numberGeneral - numberSecond) / 10;

if (numberFirst > numberSecond) {
    alert (`Первое число (${numberFirst}) больше чем второе число (${numberSecond})`);
} else if (numberFirst < numberSecond) {
    alert (`Второе число (${numberSecond}) больше чем первое число (${numberFirst}) `);
} else {
    alert (`Числа равны: ${numberFirst} = ${numberSecond} !`);
}
