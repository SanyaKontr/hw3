/*let password = '12345';
let passwordUser = prompt('Введите пароль');

if (password === passwordUser) {
   alert('Пароль введен верно') 
} else {
    alert('Пароль введен не верно') 
}

let c = 7;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let d = 150;
let e = 25;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Не верно');
}


let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


let month = String(prompt('Какой сейчас номер месяца?'))
switch (month) {
    case '1':
    case '2':  
    case '12':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');;
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}*/

let number;
do {
    number = Number(prompt('Введите 5'))
} while (number !== 5);