"use strict";

//function removingDuplicates(arrayOfStrings) {
//    return[...new Set(arrayOfStrings)]
//}

function removingDuplicates(arrayOfStrings) {
    var uniqueStrings = [];

    for(let i = 0; i < arrayOfStrings.length; i++) {
        if(uniqueStrings.includes(arrayOfStrings[i])) {
        } else{
            uniqueStrings.push(arrayOfStrings[i])
        }
    }
}

function max(arr) {

    var largestNumber;

    for (let i = 0; i < arr.length; i++) {
        if (largestNumber === undefined) {
            largestNumber = arr[i];
        }
        if(arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}

function whoIsPassing(arr) {
    var passingResults = [];


}





function dateStringToObject(string) {
    var splitString = string.split("-")
    return{month: splitString[1], day: splitString[2], year: splitString[0]};
}


function reverseString(str) {
    var revStr = ""

    for(let i = str.length -1; i >= 0; i--) {
        revStr += str.charAt(i);
    }
    return revStr;
}

function numberInfo(number) {
    var isNumberPositive = (number > 0);
    var isNumberEven = (number % 2 === 0);
    var isNumberZero = (number === 0);

    return {
        isPositive: isNumberPositive,
        isEven: isNumberEven,
        isZero: isNumberZero,
    }
}

function mostOccurringNumber(numbers) {
    //1. count the # of times each number occurs
    var counts = [];
    for(i=0;i<numbers.length;i++) {
        var aNumber = numbers[i];
        if(counts[aNumber] === undefined) {
            counts[aNumber] = 1;
        }else {
            counts[aNumber]++;  //gives us access to the counts element at index "aNumber"
        }
    }
    //2. scan through the associative array and keep track of the value with the highest count
    var maxCount = 0;
    var winningNumber = "";
    for (const countsKey in counts) {
        //console.log("the counts element at index " + countsKey + " is value " + counts[countsKey]);
        var currentCount = counts[countsKey];
        // when currentCount is > maxCount, we have a new winner so far
        if(currentCount > maxCount) {
            // update 2 things when we have a new winner
            maxCount = currentCount;
            winningNumber = countsKey;
        }
    }
    return winningNumber;
}
