/*
Домашняя работа 4:
Задание 1.
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log('-------------------');
console.log('Homework 4. Task 1:');

for (let i = 0; i <= 10; i++) {
  let str = String(i);
  if (i === 0) {
    str += ' - это ноль';
  } else if (i % 2 === 0) {
    str += ' - чётное число';
  } else {
    str += ' - нечётное число';
  }
  console.log(str);
}

/*
Задание 2.
Дан массив [1, 2, 3, 4, 5, 6, 7].
Сделайте из этого массива следующий [1, 2, 3, 6, 7].
*/

console.log('-------------------');
console.log('Homework 4. Task 2:');

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

array.splice(3, 2);
console.log(array);

/*
Задание 3.
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов.

1. Рассчитать сумму элементов этого массива;
2. Найти минимальное число;
3. Найти есть ли в этом массиве число 3.
*/

console.log('-------------------');
console.log('Homework 4. Task 3:');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const arr = [];
let sum = 0;
let min = 9;
let isThree = false;

for (let j = 0; j < 5; j++) {
  let temp = getRandomInt(10);
  arr.push(temp);

  sum += temp;

  if (temp < min) {
    min = temp;
  }

  if (!isThree && temp === 3) {
    isThree = true;
  }
}

console.log(arr);
console.log(`sum = ${sum}`);
console.log(`min = ${min}`);
console.log(`isThree = ${isThree}`);

/*
Задание 4.
*Необязательное задание*
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

console.log('-------------------');
console.log('Homework 4. Task 4:');

let string = '';

for (let k = 0; k < 20; k++) {
  string += 'x';
  console.log(string);
}

console.log('-------------------');
