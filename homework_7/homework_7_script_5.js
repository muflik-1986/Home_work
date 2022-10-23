let num = +prompt("Введите целое число");

let isPow3 = false;

let pow3Num;

for (i = 0; i <= num; i++) {
  if (num === 3 ** i) {
    isPow3 = true;
    pow3Num = i;
    break;
  }
}

if (isPow3) {
  console.log(
    `Введенное число (${num}) МОЖНО получить путем возведения числа 3 в ${pow3Num} степень`
  );
} else {
  console.log(
    `Введенное число (${num}) НЕЛЬЗЯ получить путем возведения числа 3 в некоторую степень`
  );
}
