let num = +prompt("Введите целое число");

let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`Введенное число (${num}) является простым!`);
} else {
  console.log(`Введенное число (${num}) НЕ является простым!`);
}
