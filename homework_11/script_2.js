function getNumberX() {
    let numberX;
    do {
        numberX = +prompt('Введите число Х');
    } while (isNaN(numberX));
    return numberX;
}

function getNumberY() {
    let numberY;
    do {
        numberY = +prompt('Введите число Y');
    } while (isNaN(numberY));
    return numberY;
}

function getMathSign() {
    let sign;
    do {
        sign = prompt('Введите математический знак: + - * / % ^');
    } while (!(sign === '+' || sign === '-' || sign === '*' || sign === '/' || sign === '%' || sign === '^'));
    return sign;
}

let numX = getNumberX();
let numY = getNumberY();
let sign = getMathSign();

function doMath(x, znak, y) {
    switch (znak) {
        case '+': {
            return x + y;
        }
        case '-': {
            return x - y;
        }
        case '*': {
            return x * y;
        }
        case '/': {
            return x / y;
        }
        case '%': {
            return x % y;
        }
        case '^': {
            return x ** y;
        }
        default: {
            return NaN;
        }
    }
}

let result = doMath(numX, sign, numY);
console.log(result);


