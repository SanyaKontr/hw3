//1 задание
let a=1;
let b = 2;
while (a<=b) {
   console.log('Привет');
   a++;
}

//2 задание
let x=1;
let y = 5;
while (x<=y) {
   console.log(x);
   x++;
}

//3 задание
let t = 7;
let g = 22;
while (t<=g) {
   console.log(t);
   t++;
}

//4 задание
let obj = { "Коля": 200, "Вася": 300, "Петя": 400 };
for (let money in obj){
   console.log(`${money} зарплата ${obj[money]} долларов`);
}

//5 задание
let n = 1000;
let num=0;
while (n>=50)
      {n=n/2;
      num++;}
alert (num);

//6 задание
for (let friday = 5; friday <= 31; friday +=7){
   console.log(`Сегодня пятница ${friday}-е число. Необходимо подготовить отчет`);
}