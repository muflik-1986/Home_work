let sum = 0;
for (let num = 30; num <= 80; num++) {
    if(num % 2 === 0) {
      sum += num;   
    }
}
console.log(`Сумма четных чисел в диапазоне от 30 до 80 = ${sum}`);