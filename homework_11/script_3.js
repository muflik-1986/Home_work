let lenghtOFMainArr = +prompt('Какая длинна основного массива?');
let lengthOfChildArr = +prompt('Какая длинна вложеных массивов?');

function twoDimensArr(lengthMain, lengthChild) {
    let mainArr = [];
    for (i = 0; i < lengthMain; i++) {
        let childArr = [];
        for (j = 0; j < lengthChild; j++) {
            let element = prompt(`Введите элемент дочернего массива под номером ${i + 1}`);
            childArr.push(element);
        }
        mainArr.push(childArr);
    }
    return mainArr;
}

result = twoDimensArr(lenghtOFMainArr, lengthOfChildArr);
console.log(result);


