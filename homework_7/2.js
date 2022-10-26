let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let minElement = arr[0],
  minElementIndex = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] < minElement) {
    minElement = arr[i];
    minElementIndex = i;
  }
}

document.write(`<p> Минимальный элемент = ${minElement} </p>`);
document.write(
  `<p> Порядковый номер минимального элемента = ${minElementIndex} </p>`
);

// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// 1. Найти сумму и количество положительных элементов.
// 2. Найти минимальный элемент массива и его порядковый номер.
// 3. Найти максимальный элемент массива и его порядковый номер.
// 4. Определить количество отрицательных элементов.
// 5. Найти количество нечетных положительных элементов.
// 6. Найти количество четных положительных элементов.
// 7. Найти сумму четных положительных элементов.
// 8. Найти сумму нечетных положительных элементов.
// 9. Найти произведение положительных элементов.
// 10. Найти наибольший среди элементов массива, остальные обнулить.