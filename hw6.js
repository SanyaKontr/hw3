//Задание 1
let massive = [1, 5, 4, 10, 0, 3];
for(let x = 0; x < massive.length; x++) {
    if (massive[x]=== 10) break;
    console.log(massive[x]);
}

//Задание 2
const search = [1, 5, 4, 10, 0, 3];
console.log(search.indexOf(4));

//Задание 3
const elements = [1, 3, 5, 10, 20];
let result = elements.join(' ')
console.log(result);

//Задание 4
const arr = [];

for (let a = 0; a < 3; a++) {
	arr[a] = [];
	
	for (let b = 0; b < 3; b++) {
		arr[a].push( 1);
}
}

console.log(arr);

//Задание 5
let pushArr = [1, 1, 1];
pushArr.push(2, 2, 2);
console.log(pushArr);

//Задание 6
let Items = [9, 8, 7, 'a', 6, 5];
Items = Items.sort();
let Delete = Items.pop();
console.log(Items);

//Задание 7
const includeArr = [9, 8, 7, 6, 5];
let n = Number(prompt(`Угадайте цифру от 0 до 9`));
const searchNum = includeArr.includes(n);
if (searchNum === true ) {
    alert('Угадал!')
} else {
    alert('Не угадал :(')
}

//Задание 8
let line = 'abcdef';
let splitLine = line.split('');
splitLine.reverse();
splitLine = splitLine.join('');
console.log(splitLine);

//Задание 9
const h = [  
	[1, 2, 3],
	[4, 5, 6],
]

const x = arr.flat(1);
console.log(x);

//Задание 10
const random = [4, 5, 7, 10, 1, 2, 9, 3, 6, 8];
for(let a = 0; a < random.length - 1; a++){
    const sum = random[a] + random[a+1];
    console.log("Сумма", random[a], "и", random[a + 1], "равна", sum);
}

//Задание 11
let array = [1, 2, 3, 4, 5];
function square(){
   let result = array.map(item => item **2);
console.log(result); 
}
square();

//Задание 12
const words = ['words', 'for', 'homework'];
function length(){
const wordLength = words.map(lng => lng.length);
console.log(wordLength);
}
length(['words', 'for', 'homework']);

//Задание 13
function filterPositive(array) {
let result = array.filter(item => item <0)
console.log(result);
  }
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);