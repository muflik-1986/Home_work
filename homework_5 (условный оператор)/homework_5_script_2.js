let distance1 = +prompt('Введите первое растояние (в километрах)');
let distance2 = +prompt('Введите второе растояние (в футах)')*0.000305;
if (distance1 > distance2) {
    alert (`Первое растояние (${distance1} км) больше чем второе растояние (${distance2} км) !`);
} else if (distance1 < distance2){
    alert (`Второе растояние (${distance2} км) больше чем первое растояние (${distance1} км) !`);
} else {
    alert (`Растояния равны: ${distance1} км = ${distance2} км !`);
}