"use strict";

/* var message = '';

var howmany = prompt("How many?");

for (let index = 0; index <= howmany; index++) {
    message = message + "index is: " + index + '\n';
}

alert (message); */
function showMultiplicationTable(x) {
    for (var y = 1; y <= 10; y++) {
        console.log(x + " x " + y + " = " + (x * y));
    }
}
showMultiplicationTable(7);
//
function randomNumber() {
    for (let x = 1; x <= 10; x++) {
        let random = Math.ceil(Math.random() * (200 - 20) + 20);
        if (random % 2 !== 0) {
            console.log(random + " is odd")
        } else {
            console.log(random + " is even");
        }
    }
}
randomNumber();
//
function copyNumber() {
    for (let i = 1; i <= 9; i++) {
        var number = "";
         number = i;
        for (let x = 1; x < i; x++){
            number = number + i.toString();
        }
        console.log(number.toString() );
    }
}
copyNumber()
//
function removeFive() {
    for (let i = 100; i >= 5; i -= 5)
        console.log(i)
}
removeFive();