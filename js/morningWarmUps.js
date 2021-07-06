// : Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
// : Add validation to function above, if the argument pass is not a string it should return false.
function countSpaces(str) {
    let myString = "I want an iPhone";
    let spaceCount = (myString.split(" ").length - 1);
    console.log(spaceCount)

    if (typeof str !== 'string') {
        return false
    }
}

// July 6th 2021
//  Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
//Use a for or for each loop
function capitalizeAllNames(stringArray) {
    stringArray = ["bob","Seth","TOFU","Toyota"];
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].toUpperCase();
    }
    console.log(capitalizeAllNames(stringArray))
}
//  Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.

function capitalizeFirstLetter(stringsArray) {
    var capitalizedArray = [];

    stringsArray.forEach(function(string) {
        var capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
        capitalizedArray.push(capitalized)
    });

    return capitalizedArray;
}
console.log('capitalized');
console.log(capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]));

// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]






