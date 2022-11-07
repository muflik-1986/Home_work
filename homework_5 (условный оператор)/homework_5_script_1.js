let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
if (number1 > number2) {
    alert (`Первое число (${number1}) больше чем второе число (${number2}) !`);
} else if (number1 < number2){
    alert (`Второе число (${number2}) больше чем первое число (${number1}) !`);
} else {
    alert (`Числа равны: ${number1} = ${number2}!`);
}
