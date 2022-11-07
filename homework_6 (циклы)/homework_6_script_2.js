// Вариант 1
for (let number = 10; number <= 20; number++) {
    document.write(number ** 2);
    if (number < 20) {
        document.write(', ');
    }
}


// Вариант 2
for (let num = 10; num <= 20; num++) {
    if (!(num === 20)) {
    document.write(num ** 2 + ', ');
    } else {
        document.write(num ** 2);
    }
}