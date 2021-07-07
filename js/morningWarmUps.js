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
function capitalizeAllNames() {
    let names = ["bob","Seth","TOFU","Toyota"];

    let capitalizedNames = [];
    for (let i = 0; i < names.length; i++) {
        capitalizedNames[i] = names[i].toUpperCase();
    }

    console.log(capitalizedNames);
}
    console.log(capitalizeAllNames());

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

// July 7th 2021
//  Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}
personOne.getFullName = function () {
    console.log(this.firstName + " " + this.lastName);
}
personOne.getFullName();

//  Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
personTwo.getNicelyFormattedFullName = function() {
    var first = this.firstName[0].toUpperCase() + this.firstName.slice(1)
    var last = this.lastName[0].toUpperCase() + this.lastName.slice(1)
    console.log(first + " " + last);
}
personTwo.getNicelyFormattedFullName();
//  Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}
personThree.intro = function () {
    var first = this.firstName[0].toUpperCase() + this.firstName.slice(1)
    var last = this.lastName[0].toUpperCase() + this.lastName.slice(1)
    console.log("Hello, my name is " + first + " " + last + " and I am " + this.ageInYears + " years old.")
}
personThree.intro()



