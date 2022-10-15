// Задание 1
// Вариант 1
let userName = prompt("What's your name?");
alert(`Hello, ${userName}! How are you?`);

// Вариант 2
let userName = prompt("What's your name?");
alert('Hello, ' + userName + '! How are you?');



// Задание 2
// Вариант 1
let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
alert(`
    Результат сложения: ${number1+number2}. 
    Результат вычитания: ${number1-number2}.
    Результат умножения: ${number1*number2}.
    Результат деления: ${number1/number2}.
    `);

// Вариант 2
let numberFromUser1 = prompt('Введите первое число');
let numberFromUser2 = prompt('Введите второе число');
alert(`Результат сложения: ${+numberFromUser1 + +numberFromUser2}`);
alert(`Результат вычитания: ${+numberFromUser1 - +numberFromUser2}`);
alert(`Результат умножения: ${+numberFromUser1 * +numberFromUser2}`);
alert(`Результат деления: ${+numberFromUser1 / +numberFromUser2}`);



// Задание 3
let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');
let numberThree = +prompt('Введите третье число');
alert(`Среднее арифметическое: ${(numberOne+numberTwo+numberThree)/3}`);

// let numberGeneral = +prompt('Введите шестизначное число');
// let number6 = numberGeneral % 10;
// let number5 = (numberGeneral % 100 - number6) / 10;
// let number4 = ((numberGeneral % 1000) - +(String(number5) + String(number6))) / 100;
// let number3 = ((numberGeneral % 10000) - +(String(number4) + String(number5) + String(number6))) / 1000;
// let number2 = ((numberGeneral % 100000) - +(String(number3) + String(number4) + String(number5) + String(number6))) / 10000;
// let number1 = ((numberGeneral % 1000000) - +(String(number2) + String(number3) + String(number4) + String(number5) + String(number6))) / 100000;