"use strict";
var userNum;

while (true){
    userNum = parseInt(prompt("Please enter a odd number between 1 and 50: "));
    if(userNum % 2 !== 0) {
        console.log("Number to skip is: " + userNum);
    break;
}
}
for (var i = 1; i < 50; i++) {
        if (i == userNum) {
            console.log("Yikes! Skipping Number: " + i);
            continue
        }
        if (i % 2 != 0) {
            console.log("Here is a odd number: " + i);
        }
}




