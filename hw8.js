//Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
console.log(people.sort());

//Задание 2
  const peopleList = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];

  function isPositive(element) {
return element >=0;
  }
  function isMale(element) {
  return element.gender === 'male';
  }
  function filter(source, rule) {
 let result = [];
 source.map(item => {
  if (rule(item))
  {
    result.push(item);
  }
 });
 return result;
  }
  
  console.log(filter(peopleList, isMale));
  console.log(filter([3, -4, 1, 9], isPositive));

  //Задание 3
const time = (timerSec) => {
  const currentDate = setInterval(() => {
    console.log(new Date());
  }, 3000);

  setTimeout(()=>{
    clearInterval(currentDate);
    console.log('30 секунд прошло');
  }, timerSec * 1000)
}
time(30);

//Задание 4
function delayForSecond(callback) {
setTimeout(() => {
   callback();
}, 1000)
 
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(()=>sayHi('Глеб'));