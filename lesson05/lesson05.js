// Задание 1
// const container = document.querySelector(".container");
// container.style.background = "red";
// container.style.width = "820px";
// container.style.height = "820px";
// container.style.padding = "0";
// container.style.margin = "0 auto";
// container.style.display = "flex";
// container.style.flexWrap = "wrap";

// var buk = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// var num = [1, 2, 3, 4, 5, 6, 7, 8];

// function my_initiation() {
//     const cell = document.createElement("div");
//     cell.className = "cell";
//     cont.append(cell);
//     cell.style.width = "80px";
//     cell.style.height = "80px";
//     cell.style.margin = "0px";
//     cell.style.padding = "0px";
//     cell.style.fontSize = "40px";
//     cell.style.fontWeight = "bold";
//     cell.style.textAlign = "center";
//     cell.style.border = "0.3px solid #888888";

// }

// for (let n = 0; n < 100; n++) {
//     my_initiation();
// };

// var masCell = document.querySelectorAll(".cell");
// for (let i = 0; i < masCell.length; i++) {
//     var c;
//     if (i >= 0 && i <= 10) {
//         c = "white";
//     }
//     else {
//         if (i >= 11 && i <= 18) {
//             if (i % 2 == 0) {
//                 c = "dimgrey";
//             } else {
//                 c = "bisque";
//             }
//         }
//         else {
//             if (i == 19) {
//                 c = "white";
//             }
//             else {
//                 if (i >= 21 && i <= 28) {
//                     if (i % 2 == 0) {
//                         c = "bisque";
//                     } else {
//                         c = "dimgrey";
//                     }
//                 }
//                 else {
//                     if (i == 29) {
//                         c = "white";
//                     }
//                     else {
//                         if (i >= 31 && i <= 38) {

//                             if (i % 2 == 0) {
//                                 c = "dimgrey";
//                             } else {
//                                 c = "bisque";
//                             }

//                         }
//                         else {
//                             if (i == 39) {
//                                 c = "white";
//                             }
//                             else {
//                                 if (i >= 41 && i <= 48) {
//                                     if (i % 2 == 0) {
//                                         c = "bisque";
//                                     } else {
//                                         c = "dimgrey";
//                                     }
//                                 }
//                                 else {
//                                     if (i == 49) {
//                                         c = "white";
//                                     }
//                                     else {
//                                         if (i >= 51 && i <= 58) {
//                                             if (i % 2 == 0) {
//                                                 c = "dimgrey";
//                                             } else {
//                                                 c = "bisque";
//                                             }
//                                         }
//                                         else {
//                                             if (i == 59) {
//                                                 c = "white";
//                                             }
//                                             else {
//                                                 if (i >= 61 && i <= 68) {
//                                                     if (i % 2 == 0) {
//                                                         c = "bisque";
//                                                     } else {
//                                                         c = "dimgrey";
//                                                     }
//                                                 }
//                                                 else {
//                                                     if (i == 69) {
//                                                         c = "white";
//                                                     }
//                                                     else {
//                                                         if (i >= 71 && i <= 78) {
//                                                             if (i % 2 == 0) {
//                                                                 c = "dimgrey";
//                                                             } else {
//                                                                 c = "bisque";
//                                                             }
//                                                         }
//                                                         else {
//                                                             if (i == 79) {
//                                                                 c = "white";
//                                                             }
//                                                             else {
//                                                                 if (i >= 81 && i <= 88) {
//                                                                     if (i % 2 == 0) {
//                                                                         c = "bisque";
//                                                                     } else {
//                                                                         c = "dimgrey";
//                                                                     }
//                                                                 }
//                                                                 else {
//                                                                     c = "white";
//                                                                 }
//                                                             }
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     masCell[i].style.background = c;
// }

// for (let i = 0; i < buk.length; i++) {
//     if (i >= 1 && i <= 9) {
//         masCell[i].textContent = buk[i];
//     }
// }

// masCell[91].textContent = buk[1];
// masCell[92].textContent = buk[2];
// masCell[93].textContent = buk[3];
// masCell[94].textContent = buk[4];
// masCell[95].textContent = buk[5];
// masCell[96].textContent = buk[6];
// masCell[97].textContent = buk[7];
// masCell[98].textContent = buk[8];
// masCell[10].textContent = num[0];
// masCell[20].textContent = num[1];
// masCell[30].textContent = num[2];
// masCell[40].textContent = num[3];
// masCell[50].textContent = num[4];
// masCell[60].textContent = num[5];
// masCell[70].textContent = num[6];
// masCell[80].textContent = num[7];
// masCell[19].textContent = num[0];
// masCell[29].textContent = num[1];
// masCell[39].textContent = num[2];
// masCell[49].textContent = num[3];
// masCell[59].textContent = num[4];
// masCell[69].textContent = num[5];
// masCell[79].textContent = num[6];
// masCell[89].textContent = num[7];



// Задание 2
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
//         return ('В корзине ' + this.product.reduce((totalQuantity, cartItem) => totalQuantity += cartItem.quantity, 0) + ' товаров на сумму ' + this.product.reduce((totalBasket, cartItem) => totalBasket += cartItem.price * cartItem.quantity, 0));
//     },
//     price() {
//         totalPrice = document.createElement("p");
//         totalPrice.className = "totalPrice";
//         cont.append(totalPrice);
//         totalPrice.innerHTML = 'Итого: ' + basket.basketPrice();
//         totalPrice.style.fontSize = "25px";
//     },
//     createBtn() {
//         btn = document.createElement("button");
//         btn.className = "btn";
//         cont.append(btn);
//         btn.style.width = "180px";
//         btn.style.height = "50px";
//         btn.innerHTML = "Очистить корзину";
//         btn.style.fontSize = "16px";
//         btn.style.cursor = "pointer";
//         btn.onclick = this.myFOO2;
//     },
//     cart() {
//         const container = document.querySelector(".container");
//         container.style.padding = "0";
//         container.style.margin = "0 auto";
//         container.style.display = "flex";
//         container.style.flexDirection = "column";
//         for (let i = 0; i < basket.product.length; i++) {
//             var name = document.createElement("p");
//             name.className = "name";
//             cont.append(name);
//             name.innerHTML = 'Наименование товара: ' + basket.product[i].product_name + ' Цена товара: ' + basket.product[i].price;
//             name.style.fontSize = "25px";
//         }
//         btn = document.createElement("button");
//         btn.className = "btn";
//         cont.append(btn);
//         btn.style.width = "180px";
//         btn.style.height = "50px";
//         btn.innerHTML = "Очистить корзину";
//         btn.style.fontSize = "16px";
//         btn.style.cursor = "pointer";
//         btn.onclick = this.clearCart;
//     },
//     render() {
//         const arr = document.getElementsByClassName("name");
//         if (arr.length > 0) {
//             const container = document.querySelector(".container");
//             container.style.padding = "0";
//             container.style.margin = "0 auto";
//             container.style.display = "flex";
//             container.style.flexDirection = "column";
//             var name;
//             for (let i = 0; i < basket.product.length; i++) {
//                 name = document.createElement("p");
//                 name.className = "name";
//                 cont.append(name);
//                 name.innerHTML = 'Наименование товара: ' + basket.product[i].product_name + ' Цена товара: ' + basket.product[i].price;
//                 name.style.fontSize = "25px";
//             }
//         } else {
//             alert('Корзина успешно отчищена!')
//             cartclear = document.createElement("p");
//             cartclear.className = "name";
//             cont.append(cartclear);
//             cartclear.innerHTML = 'Корзина пуста';
//             cartclear.style.fontSize = "25px";
//         }
//     },
//     clearCart() {
//         const arr = document.getElementsByClassName("name");
//         while (arr.length > 0) {
//             arr[0].remove();
//         }
//         btn.remove();
//         basket.render();
//         basket.createBtn();
//     },
// }


// basket.cart();