'use strict'
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
//     мы должны получить на выходе объект, в котором в соответствующих свойствах
// описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
//     необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
console.warn('Задание 1');

function convertNumToObj(my_number) {
    if (my_number < 0 || my_number > 999) {
        console.log(`Вы ввели неправильное число ${my_number}, надо в диапазоне от 0 до 999 включительно`);
        return {};
    }
    return {
        'единицы': my_number % 10,
        'десятки': Math.floor((my_number / 10) % 10),
        'сотни': Math.floor(my_number / 100)
    };
}

let test_obj = convertNumToObj(123);
//выведем обьект
console.log(test_obj);
//проверим что тип именно обьект
console.log(`Тип переменной: ${typeof test_obj}`);
//переберем все элементы обьекта (хорошее свойство)
for (let i in test_obj) {
    console.log(i + ": " + test_obj[i]);
}

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.
//     Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
console.warn('Задание 2');

let MyBasket = {
    product: [
        {name: 'product_1', price: 100, count: 2},
        {name: 'product_2', price: 500, count: 5},
        {name: 'product_3', price: 1000, count: 10}
    ],
    sumMyBasket() {
        let all_sum = 0;
        for (let i in MyBasket.product) {
            console.log(MyBasket.product[i].name, MyBasket.product[i].price, MyBasket.product[i].count);
            all_sum += MyBasket.product[i].price * MyBasket.product[i].count;
        }
        return all_sum;
    }
}
console.log(`Сумма всех товаров в корзине = ${MyBasket.sumMyBasket()}`);
