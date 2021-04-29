'use strict';

// alert ('Задание 5 часть 2');

let MyBasket = {
    all_sum: 10,
    all_count: 0,
    product: [
        {name: 'product_1', price: 100, count: 2},
        {name: 'product_2', price: 500, count: 5},
        {name: 'product_3', price: 700, count: 9}
    ],
    UpdateMyBasket() {
        MyBasket.all_sum = 0;
        MyBasket.all_count = 0;
        let basket_div = document.getElementById("basket");

        for (let i in MyBasket.product) {
            MyBasket.all_sum += MyBasket.product[i].price * MyBasket.product[i].count;
            MyBasket.all_count += 1;

            let div1 = document.createElement("div1");
            div1.className = "my_div";
            div1.innerHTML = MyBasket.product[i].name +  '    ' +
                MyBasket.product[i].price +  '    ' +
                MyBasket.product[i].count +  '    ' +
                "<br>";
            basket_div.appendChild(div1);
            
        }
        if (MyBasket.all_count === 0) {
            basket_div.innerHTML += `Корзина пустая`;
        } else {
            basket_div.innerHTML += `Кол-во твоаров ${MyBasket.all_count}  Сумма всех товаров в корзине = ${MyBasket.all_sum}`;
        }


    }
}

MyBasket.UpdateMyBasket();
