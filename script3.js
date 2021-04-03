'use strict'

//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// используем решето Аткина
const n = 111;
const x = Math.floor (Math.sqrt (n));
let my_sieve = new Array();
let my_result = new Array(2,3);
// for (let i=1; i <= n; i += 1) {
//     my_sieve.push(false);
// }
let i=1;
while (i <= n){ //
    my_sieve.push(false);
    i += 1;
}

for (let i=1; i <= x; i += 1) {
    for (let j=1; j <= x; j += 1) {
        let my_temp = 4 * Math.pow(i, 2) + Math.pow(j,2);
        if (my_temp <= n && (my_temp%12 === 1 || my_temp%12 === 5))  my_sieve[my_temp] = !my_sieve[my_temp];

        my_temp = 3 * Math.pow(i, 2) + Math.pow(j,2);
        if (my_temp <= n && my_temp%12 === 7) my_sieve[my_temp] = !my_sieve[my_temp];

        my_temp = 3 * Math.pow(i, 2) - Math.pow(j,2);
        if (i > j && my_temp <= n && my_temp%12 === 11) my_sieve[my_temp] = !my_sieve[my_temp];
    }
}

for (let i=5; i <= x; i += 1) {
    if (my_sieve[i]){
        let s = i*i;
        for (let j=s; j <= n; j += s) {
            my_sieve[j] = false;
        }
    }
}

for (let i=5; i <= n; i += 1) {
    if (my_sieve[i]){
        my_result.push(i);
    }
}
console.log('Задание 1');
console.log(`Простые числа до числа ${n}:`);
console.log(my_result);

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
//     Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
// стоимости корзины в зависимости от находящихся в ней товаров.
//     Товары в корзине хранятся в массиве. Задачи:
// 2.a) Организовать такой массив для хранения товаров в корзине;
console.log('Задание 2a - корзина');
const my_basket = [
     // имя        цена  кол-во
     ["product_1", 100,   2],
     ["product_2", 500,   5],
     ["product_3", 1000, 10],
];
for (let i=0; i < my_basket.length; i += 1) {
    console.log(my_basket[i]);
}

// 2.b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
console.log('Задание 2b');
function  countBasketPrice (b){
    let my_sum = 0;
    for (let i = 0; i < b.length; i += 1) {
        my_sum += b[i][1] * b[i][2];
    }
    return my_sum;
}
console.log(`Сумма всех товаров в корзине: ${countBasketPrice(my_basket)}`);

//3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
console.log('Задание 3');
for (let i = 0; i < 10; console.log(i++)) {};

//4.Нарисовать пирамиду с 20 рядами с помощью console.log
console.log('Задание 4');
let my_string = '';
for (let i = 0; i < 20; i++) {
    my_string = '';
    for (let j = 0; j <= i; j++)
        my_string += 'x';
    console.log(my_string);
}