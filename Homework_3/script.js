/*
Домашняя работа 3:
Задание 1.
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3^3 степени.
*/

console.log('-------------------');
console.log('Homework 3. Task 1:');

function cube(num) {
  return Math.pow(num, 3);
}

let a = 2;
let b = 3;

console.log(`${a}^3 + ${b}^3 = ${cube(a) + cube(b)}`);

/*
Задание 2.
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно.

Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение".
*/

console.log('-------------------');
console.log('Homework 3. Task 2:');

function tax(num) {
  let wo_tax = num * 0.87;
  console.log(`Размер заработной платы за вычетом налогов равен ${wo_tax.toFixed(2)}`);
}

let num = Number(prompt('Введите число >>>'));
if (Number.isNaN(num)) {
  console.log('Значение задано неверно!');
} else {
  tax(num);
}

/*
Задание 3.
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел.
*/

console.log('-------------------');
console.log('Homework 3. Task 3:');

function maxOfThree(n1, n2, n3) {
  let res;

  if (n1 >= n2) {
    if (n1 >= n3) {
      res = n1;
    } else {
      res = n3;
    }
  } else {
    if (n2 >= n3) {
      res = n2;
    } else {
      res = n3;
    }
  }

  return res;
}

let n1 = Number(prompt('Введите 1-ое число >>>'));
let n2 = Number(prompt('Введите 2-ое число >>>'));
let n3 = Number(prompt('Введите 3-ое число >>>'));

console.log('max :>> ', maxOfThree(n1, n2, n3));

/*
Задание 4.
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление

Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).

Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

console.log('-------------------');
console.log('Homework 3. Task 4:');

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  let res;

  if (a < b) {
    res = b - a;
  } else if (a == b) {
    res = 0;
  } else {
    res = a - b;
  }

  return res;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

console.log('add(2, 6) = ', add(2, 6));
console.log('sub(3, 33) = ', sub(3, 33));
console.log('sub(33, 33) = ', sub(33, 33));
console.log('sub(33, 3) = ', sub(33, 3));
console.log('mul(2, 6) = ', mul(2, 6));
console.log('div(2, 6) = ', div(2, 6));

console.log('-------------------');
