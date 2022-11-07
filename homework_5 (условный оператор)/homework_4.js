let userDateOfBirth = +prompt('Введите Ваш год рождения');
let userCity = prompt('В каком городе Вы живете?', 'Харьков');
let userSport = prompt('Какой Ваш любимый вид спорта?');

let result = '';

if (userDateOfBirth) {
result+= `Ваш возраст: ${2022 - userDateOfBirth}. \n`;
} else {
    result+= `К сожалению, Вы не ввели год своего рождения! \n`;
}

if (userCity) {
switch (userCity) {
    case 'Лондон':
        result+= `Ты живешь в столице Великобритании! \n`;
        break;
    case 'Вашингтон':
        result+= `Ты живешь в столице США! \n`;
        break;
    case 'Киев':
        result+= `Ты живешь в столице Украины! \n`;
        break;
    default:
        result+= `Ты живешь в городе ${userCity}. \n`;
        break;
}
} else {
    result+= `К сожалению, Вы не ввели свой город! \n`;
}

if (userSport) {
    switch (userSport) {
        case 'Баскетбол':
            result+= `Твой любимый спорт - баскетбол! Круто! Хочешь стать М. Джорданом? \n`;
            break;
        case 'Футбол':
            result+= `Твой любимый спорт - футбол! Круто! Хочешь стать З. Зиданом? \n`;
            break;
        case 'Теннис':
            result+= `Твой любимый спорт - теннис! Круто! Хочешь стать А. Агасси? \n`;
            break;   
        default:
            result+= `Твой любимый спорт ${userSport}. \n`;
            break;
    }
    } else {
        result+= `К сожалению, Вы не ввели свой любимый вид спорта! \n`;
    }

alert(result);