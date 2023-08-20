/*let a=1;
let b = 2;
while (a<=b) {
    console.log('Привет');
    a++;
}

let x=1;
let y = 5;
while (x<=y) {
    console.log(x);
       x++;
}

let t = 7;
let g = 22;
while (t<=g) {
    console.log(t);
       t++;
}*/

const obj = {
   'Коля' : '200',
}
for (let money in obj) { 
   console.log( `${obj}- зарплата ${money[obj]} долларов`);
   }