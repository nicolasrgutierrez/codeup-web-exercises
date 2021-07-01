// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
// TODO: Add validation to function above, if the argument pass is not a string it should return false.
function countSpaces(str) {
    let myString = "I want an iPhone";
    let spaceCount = (myString.split(" ").length - 1);
    console.log(spaceCount)

    if (typeof str !== 'string') {
        return false
    }
}








