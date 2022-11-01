function pow(num, degree) {
    if (degree === 1) {
        return num;
    }



    let prev = pow(num, degree - 1);
    // #2 pow(2, 3)
    // #3 pow(2, 2)
    // #4 pow(2, 1)
    return num *= prev; // num = num * prev.
    // #2 num -- 2; prev -- 8; return 2 * 8
    // #3 num -- 2; prev -- 4; return 2 * 4
    // #4 num -- 2; prev -- 2; return 2 * 2
}

// let result = pow(2, 2);
// console.log(result); 
console.log(pow(2, 4)); // #1 pow(2, 4)