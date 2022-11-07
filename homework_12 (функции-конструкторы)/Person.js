function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showInfo = function () {
        console.log(`Человек:\n имя - ${this.name}; \n возраст - ${this.age}.`);
    }
}