'use strict';
alert('Задание 5 часть 1');

let myBlock = document.querySelector('.chess_board');
let cell;
let f = true;

for (let i = 1; i <= 8; i++) {
    f = !f;
    for (let j = 1; j <= 8; j++) {
        cell = document.createElement('div');
        if (f) {
            cell.className = 'cell black'
        } else {
            cell.className = 'cell white'
        }
        ;
        myBlock.appendChild(cell);
        f = !f;
    }
}

