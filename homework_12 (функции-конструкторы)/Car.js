function Car(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.showInfo = function () {
        let info = `Автомобиль: \n Марка - ${this.brand}; \n Год производства - ${this.year}; \n Цвет - ${this.color}.`;
        if (this.owner) {
            info += `\n Собственник: имя - ${this.owner.name}; возраст - ${this.owner.age}`;
        }
        console.log(info);
    };
    this.setOwner = function (newOwner) {
        this.owner = newOwner;
    };
}