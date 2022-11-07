let arr = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

let positiveCount = 0,
    positiveSum = 0,
    positiveMult = 1,
    positiveEvenCount = 0,
    positiveOddCount = 0,
    positiveEvenSum = 0,
    positiveOddSum = 0,
    negativeCount = 0,
    minElement = arr[0],
    minElementIndex = 0,
    maxElement = arr[0],
    maxElementIndex = 0,
    changedArray = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveSum += arr[i];
        positiveMult *= arr[i];
        positiveCount++;
        if (i % 2 === 0) {
            positiveEvenSum += arr[i];
            positiveEvenCount++;
        } else {
            positiveOddSum += arr[i];
            positiveOddCount++;
        }
    } else {
        negativeCount++;
    }

    if (arr[i] < minElement) {
        minElement = arr[i];
        minElementIndex = i;
    }

    if (arr[i] > maxElement) {
        maxElement = arr[i];
        changedArray[maxElementIndex] = 0;
        maxElementIndex = i;
        changedArray[i] = arr[i];
    } else {
        changedArray[i] = 0;
    }
}

document.write(`
<p> 1. Сумма положительных элементов = ${positiveSum}. Количество положительных элементов = ${positiveCount}. </p>
<p> 2. Минимальный элемент = ${minElement}. Порядковый номер минимального элемента = ${minElementIndex}. </p>
<p> 3. Максимальный элемент = ${maxElement}. Порядковый номер максимального элемента = ${maxElementIndex}. </p>
<p> 4. Количество отрицательных элементов = ${negativeCount}. </p>
<p> 5. Количество нечетных положительных элементов = ${positiveOddCount}. </p>
<p> 6. Количество четных положительных элементов = ${positiveEvenCount}. </p>
<p> 7. Сумма четных положительных элементов = ${positiveEvenSum}. </p>
<p> 8. Сумма нечетных положительных элементов = ${positiveOddSum}. </p>
<p> 9. Произведение положительных элементов = ${positiveMult}. </p>
<p> 10. Новый массив: ${changedArray.join(", ")}. </p>
`);