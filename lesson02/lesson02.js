// Задание 1
// // var a = 1, b = 1, c, d;
// // c = ++a; alert(c); // 2, т.к перед переменной стоит инкремент
// // d = b++; alert(d); // 1, т.к инкремент стоит после переменной
// // c = (2 + ++a); alert(c); // 5, т.к переменная "а" в первой строке приняла значение 2, соответсвенно в этой строке переменная будет равна 3 из-за стоящего перед ней инкремента, и соотвественно все выражение будет 2 + 3 = 5
// // d = (2 + b++); alert(d); // 4, т.к переменная "b" после повторного примения приняла значение 2 и в этой строке инкремент стоит после переменной, то выражение получается 2 + 2 = 4.
// // alert(a); // 3, переменная "а" увеличилась пошагово (путем двухкратного применения префиксных инкрементов) с первоначального значения 1 до значения 2 и,затем, до значения 3.
// // alert(b); // 3, тоже самое произошло и с переменной "b", т.к выражение alert(b) стоит в самом конце всех преобразований.

// Задание 2
// // var a = 2;
// // var x = 1 + (a *= 2);
// // alert(x); x = 5.

// Задание3
// var a = +prompt('Введите целочисленное значение a');
// var b = +prompt('Введите целочисленное значение b');
// if (a > 0 & b > 0) {
//     console.log(a - b);
// }
// else {
//     if (a < 0 & b < 0) {
//         console.log(a * b);
//     }
//     else {
//         console.log(a + b)
//     }
// }


// Задание 4
// // var a = +prompt('Введите число от 1 до 15');
// // switch (a) {
// //     case 1:
// //         console.log(a, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 2:
// //         console.log(a, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 3:
// //         console.log(a, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 4:
// //         console.log(a, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 5:
// //         console.log(a, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 6:
// //         console.log(a, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 7:
// //         console.log(a, 8, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 8:
// //         console.log(a, 9, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 9:
// //         console.log(a, 10, 11, 12, 13, 14, 15);
// //         break;
// //     case 10:
// //         console.log(a, 11, 12, 13, 14, 15);
// //         break;
// //     case 11:
// //         console.log(a, 12, 13, 14, 15);
// //         break;
// //     case 12:
// //         console.log(a, 13, 14, 15);
// //         break;
// //     case 13:
// //         console.log(a, 14, 15);
// //         break;
// //     case 14:
// //         console.log(a, 15);
// //         break;
// //     case 15:
// //         console.log(a);
// //         break;
// //     default:
// //         console.log('tilt');
// //         break;
// // }


// Задание 5
// // var a = Math.floor(Math.random() * 100);
// // var b = Math.floor(Math.random() * 100);

// // function operationAddition(a, b) {
// //     return a + b;
// // }

// // function operationSubtraction(a, b) {
// //     return a - b;
// }

// function operationMultiplication(a, b) {
//     return a * b;
// }

// function operationDivision(a, b) {
//     return a / b;
// }

// alert('a = ' + a +
//     '\nb = ' + b +
//     '\na + b= ' + operationAddition(a, b) +
//     '\na - b = ' + operationSubtraction(a, b) +
//     '\na * b = ' + operationMultiplication(a, b) +
//     '\na / b = ' + operationDivision(a, b));




// Задание 6
var a = +prompt('Введите значение переменной "a"'),
    b = +prompt('Введите значение переменной "b"'),
    operation = prompt('Введите необходимую операцию "+", "-", "*", "/"'),
    result;



function operationAddition(a, b) {
    return a + b;
}

function operationSubtraction(a, b) {
    return a - b;
}

function operationMultiplication(a, b) {
    return a * b;
}

function operationDivision(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case ("+"):
            return operationAddition(a, b);
        case ("-"):
            return operationSubtraction(a, b);
        case ("*"):
            return operationMultiplication(a, b);
        case ("/"):
            return operationDivision(a, b);
        default:
            return console.log('sosi');
    }
}

alert(mathOperation(a, b, operation));




