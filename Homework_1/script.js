/*
Домашняя работа 1:
Задание 1.
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.
*/

let temperature_celsius = 36.6;
let temperature_fahrenheit = (9 / 5) * temperature_celsius + 32;
console.log('-------------------');
console.log('Homework 1. Task 1:');
console.log('Celsius :>> ', temperature_celsius);
console.log('Fahrenheit :>> ', temperature_fahrenheit);

/*
Задание 2.
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.
*/

console.log('-------------------');
console.log('Homework 1. Task 2:');
let name = 'Alexander';
let admin = name;
console.log('admin :>> ', admin);
console.log('-------------------');
