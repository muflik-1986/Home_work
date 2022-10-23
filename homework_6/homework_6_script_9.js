let num = +prompt('Введите натуральное число');

let quant = 0, sum = 0;

for (let i = 1; i <=num; i++) {
    if (num % i === 0) {
        document.write (`<p> Делитель натурального числа: ${i};</p>`);
        if (i % 2 === 0) {
        quant++;
        sum +=i;
        }
    }
}
document.write (`<p> Колличество четных делителей: ${quant}; </p>`);
document.write (`<p> Сумма четных делителей: ${sum}; </p>`);