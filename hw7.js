//Задание 1
let text = prompt('Введите любое предложение или слово')
text = text.toLocaleUpperCase();
console.log(text);

//Задание 2

function filterString(arr, part) { 
return arr.filter(str => str.toLowerCase().startsWith(part.toLowerCase())); 
} 
const buy = [`Молоко`, `Шоколад`, `Яйца`, `Хлеб`, `Хлеб черный`]; 
const part = prompt(`Введите продукт или его часть`); 
   
console.log(filterString(buy, part));

//Задание 3
let x = prompt('Введите не целое число или цифру')
console.log(Math.floor(x)); //до меньшего целого
console.log(Math.ceil(x)); //до большего целого
console.log(Math.round(x)); //до ближайшего целого

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(Math.floor(getRandom(0, 10)));

//Задание 6

function array(max) {
    let array = [];
    for (let y = 0; y < max; y++) {
        array[y] = y + 1;
        array = array.sort(() => Math.random() - 0.5);
    }  
    return array;
}
console.log(array(prompt(`Введите число`)/2));

//Задание 7
function getRandom(min, max) {
    min = Math.round(min);
    max = Math.round(max);
    return Math.floor(Math.random() * (max - min)) + min;

}
console.log(getRandom(prompt(`Введите первое число`), prompt(`Введите второе число`)));

//Задание 8
let todayDate = new Date();
console.log(todayDate);

//Задание 9
let getDate = new Date;
console.log(getDate);

getDate.setDate(73);
console.log(getDate);

//Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
let fullDate = "Дата: " + months[myDate.getMonth()] + " " + myDate.getDate()+ " число" + " " + myDate.getFullYear() + ", это " + days[myDate.getDay()];
let fullTime = "Время: " + hour + `:` + minute+ `:` + second;

console.log(fullDate);
console.log(fullTime);

//Задание 11

function rememberWord () {
let RememberWords = [ 'Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    
RememberWords = RememberWords.sort(() => Math.random() - 0.5);
alert(RememberWords);
    
let answerLast = prompt(`Какой был первый фрукт?`);
let last = RememberWords[RememberWords.length - 1];

let answerFirst = prompt(`Какой был последний фрукт?`);
let first = RememberWords[0];
    
if (answerFirst.toLowerCase().includes(first.toLowerCase()) && answerLast.toLowerCase().includes(last.toLowerCase())) {
        return alert("Поздравляю!");
} else if (answerFirst.toLowerCase().includes(first.toLowerCase()) || answerLast.toLowerCase().includes(last.toLowerCase())) {
        alert(`Ты был близок к победе! Попробуй еще раз!`)
} else {
        alert(`Не угадал! Попробуй еще раз!`)
}
    
    }
