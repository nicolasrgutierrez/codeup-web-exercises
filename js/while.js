"use strict";


let x = 2;
while(x < 65537) {
    console.log(x);
    x = x * 2;
}



//
let totalSales = Math.ceil(Math.random() * (100 - 50) + 50)
console.log("The number of cones I can sell is " + totalSales);

let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);
    totalSold = totalSold + conesBought;
    console.log("My customer bought " + conesBought);
     console.log("I've sold this many " + totalSold);
} while(totalSold < totalSales);
