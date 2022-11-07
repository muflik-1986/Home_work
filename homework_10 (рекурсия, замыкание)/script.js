function pow(num, degree) {
    if (degree === 1) {
        return num;
    }
    let prev = pow(num, degree - 1);
    return num *= prev;
}

console.log(pow(2, 3));