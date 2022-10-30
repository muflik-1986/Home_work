function getSumFn() {
    let n = 0;
    return function (number) {
        n += number;
        return n;
    }
}

let sum = getSumFn();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28


