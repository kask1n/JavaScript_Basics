/*
Домашняя работа 5:
Задание 1.
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
*/

console.log('-------------------');
console.log('Homework 5. Task 1:');

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
}

for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}

/*
Задание 2.
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
*/

console.log('-------------------');
console.log('Homework 5. Task 2:');

const post = {
  author: "John", // <<< Вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // <<< Вывести это число
      },
    },
    {
      userId: 5, // <<< Вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // <<< Вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/*
Задание 3.
Дан массив prods, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
*/

console.log('-------------------');
console.log('Homework 5. Task 3:');

const prods = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

prods.forEach(element => {
  element.price = element.price * 0.85;
});

console.log(prods);

/*
Задание 4.
1. Необходимо вывести в консоль массив продуктов, в которых есть хоть одна фотография, используя метод filter. Исходные данные - массив products.

2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
*/

console.log('-------------------');
console.log('Homework 5. Task 4:');

const products = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg",
    ],
  },
  {
    id: 8,
    price: 78,
  },
];

let productsWithPhoto = products.filter(item => item.photos && item.photos.length > 0)
console.log(productsWithPhoto);

/*
Задание 5.
Дано 2 массива - Вам необходимо объединить их так, чтобы значения первого массива были ключами, а значения второго массива — значениями.
*/

console.log('-------------------');
console.log('Homework 5. Task 5:');

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

if (en.length === ru.length) {
  const week = {};
  for (let i = 0; i < en.length; ++i) {
    week[en[i]] = ru[i];
  }
  console.log(week);
} else {
  console.log('>>> Массивы не равны.');
}

console.log('-------------------');
