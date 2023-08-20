let a=1;
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
}

let obj = { Коля: 200, Вася: 300, Петя: 400 };
for (let money in obj){
   console.log(`${money} зарплата ${obj[money]} долларов`);
}

let n = 1000;
let num=0;
while (n>=50)
{
n=n/2;
num++;
}
alert (num);


let fri = 0;
while (fri!==26) {; 
	fri++

	if (fri === 5) {
		console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
       fri+7;}
    if (fri === 12) {
		console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
       fri+7;}
    if (fri === 19) {
		console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
       fri+7;}
    if (fri === 26) {
		console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
       fri+7;}
}