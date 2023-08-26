//задание 1
function min(a, b) { 
    return a < b? a : b; 
}
let x = 1, y = 2, m;
m = min(x, y);
console.log(m);

//задание 2
function numb(n) { 
if (n % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('Число не четное');
}
}
x = numb(prompt('Введите число'))

//Задание 3
function square(x){
    x**2;
    return x**2;
}

function sq(x){
    return x**2;
}
s = square(6);

console.log(`Квадрат цифры 6 = ${s}`);

//Задание 4

function Old(age){
   if (age <0) {
    alert('Вы ввели неправильное значение');
} else if (age > 0 && age <=12){
    alert('Привет, друг!');
} else {
    alert('Добро пожаловать!');
} 
}
Old(prompt('Введите свой возраст'));

//Задание 5

function Numbers(a,b){
    if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
} else {
    return a*b;
}
}
console.log(Numbers('a', 22));
console.log(Numbers(11, 22));

//Задание 6

function Correct(){
let x = prompt('Введите число');
if (isNaN(x)) {
    console.log(`Переданный параметр не является числом`);
} else (Number(x) && x >= 0 && x <=10)
    return console.log(`${x} в кубе равняется ${x**3}`);
}


Correct();

//Задание 7

function getCircleArea(){
    return `${Math.PI*this.radius**2}`;
}
function getCirclePerimeter(){
    return `${2*Math.PI*this.radius}`;
}

const circle1 = {
    radius : 20,
    getArea : getCircleArea,
    getPerimeter : getCirclePerimeter,
}

const circle2 = {
    radius : 30,
    getArea : getCircleArea,
    getPerimeter : getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//игра на сайте


function month(){
    let monthGame = Number(prompt('Введите номер месяца'));
    
    if (monthGame === 1 ||monthGame === 2 || monthGame === 12) {
    return alert('Зима');} 
    
    else if (monthGame === 3 ||monthGame === 4 || monthGame === 5) {
    return alert('Весна');}  
    
    else if (monthGame === 6 ||monthGame === 7 || monthGame === 8) {
    return alert('Лето');}

    else if (monthGame === 9 ||monthGame === 10 || monthGame === 11) {
    return alert('Осень');}
    
    else {
    return alert('Такого месяца нет');}
}