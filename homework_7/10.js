let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Вариант 1
let maxElement = arr[0],
  maxElementIndex = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    // если элемент больше самого большого
    maxElement = arr[i]; // делаю самым большим элементом
    arr[maxElementIndex] = 0; // обнуляю предидущий самый большой элемент
    maxElementIndex = i;
  } else {
    // если элемент меньше самого большого
    arr[i] = 0; // обнуляю элемент
  }
}
console.log(arr);

// Вариант 2
// let maxElement = arr[0],
//   maxElementIndex = 0;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > maxElement) {
//     maxElement = arr[i];
//     maxElementIndex = i;
//   }
// }
// for (i = 0; i < arr.length; i++) {
//   if (i !== maxElementIndex) {
//     arr[i] = 0;
//   }
// }
