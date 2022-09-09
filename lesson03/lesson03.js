// Задание 1
// let number = 0;
// while (number < 100) {
//     let check = true;
//     if (number < 2) check = false;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             check = false;
//             break;
//         }
//     }
//     if (check) console.log(number);
//     number++;
// }

// Задание 2
// const basket = [
//     ['Джинсы', 2000, 2],
//     ['Футболка', 500, 1],
//     ['Кофта', 1500, 2],
//     ['Кеды', 4000, 1],
// ];

// function countBasketPrice(basket) {
//     console.log("Корзина");
//     totalPrice = 0;
//     for (let i = 0; i < basket.length; i++) {
//         console.log("Наименование товара " + basket[i][0] + "; Цена товара " + basket[i][1] + "; Количество товара " + basket[i][2] + ".");
//         totalPrice += basket[i][1] * basket[i][2];
//     }
//     console.log("Итого " + totalPrice);
// }

// countBasketPrice(basket);