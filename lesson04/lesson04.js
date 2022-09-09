// Задание 1
// let number;

// function numberSplit(number) {
//     let obj = {};
//     number = prompt('Введите любое число в трехзначном формате от 0 до 999');
//     while (number == '' || isNaN(number)) {
//         number = prompt('Введите любое число в трехзначном формате от 0 до 999');
//     }
//     if (number > 999) {
//         alert('Введеное число превышает значение 999');
//     }
//     else {
//         number.split();
//         obj.hundreds = number[0];
//         obj.dozens = number[1];
//         obj.units = number[2];
//         console.log(obj);
//     }
// }

// numberSplit(number);

//Задание 2
// const basket = {
//     product: [
//         {
//             product_name: "Джинсы",
//             price: 2000,
//             quantity: 2
//         },
//         {
//             product_name: "Футболка",
//             price: 500,
//             quantity: 1
//         },
//         {
//             product_name: "Кофта",
//             price: 1000,
//             quantity: 1
//         },
//         {
//             product_name: "Кеды",
//             price: 2000,
//             quantity: 1
//         },
//     ],
//     basketPrice() {
//         console.log(this.product.reduce((totalBasket, cartItem) => totalBasket += cartItem.price * cartItem.quantity, 0));
//     }
// }

// basket.basketPrice();