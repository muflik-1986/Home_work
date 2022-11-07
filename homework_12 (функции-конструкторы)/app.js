function getPersonName() {
    let name;
    do {
        name = prompt('Введите имя человека:');
    } while (name === '' || name == null || isNumeric(name));
    return name;
}

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function getPersonAge() {
    let age;
    do {
        age = +prompt('Введите возраст человека:');
    } while (age === '' || !isNumeric(age) || age < 18);
    return age;
}

function getCarBrand() {
    let brand;
    do {
        brand = prompt('Введите марку автомобиля:');
    } while (brand === '' || brand == null || isNumeric(brand));
    return brand;
}

function getCarYear() {
    let year;
    do {
        year = +prompt('Введите год производства автомобиля: с 1990 по 2022');
    } while (year === '' || year <= 1990 || year > 2022 || !isNumeric(year));
    return year;
}

function getCarColor() {
    let color;
    do {
        color = prompt('Введите цвет автомобиля:');
    } while (color === '' || color == null || isNumeric(color));
    return color;
}

let personName = getPersonName();
let personAge = getPersonAge();
let carBrand = getCarBrand();
let carYear = getCarYear();
let carColor = getCarColor();

let owner = new Person(personName, personAge);
let car = new Car(carBrand, carYear, carColor);
car.setOwner(owner);
console.log(car);