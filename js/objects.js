(function() {
    "use strict";

    /**
     *
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {
    firstName: "Mason",
    lastName: "Gutierrez",
    };
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!"
    }
    console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     const shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

        shoppers.forEach(function(shopper) {
            const discount = shopper.amount * .12
            const finalTotal = shopper.amount - discount
            if(shopper.amount <= 200) {
                console.log("The shopper " + shopper.name + " has a total cart of " + shopper.amount + " which does not qualify for a discount")
            } else
            console.log ("The shopper " + shopper.name + " has a total cart of " + shopper.amount + " that qualifies for a discount of 12%! Which leads to a final total of: " + finalTotal)
        });

    //cameron would get no discount, ryan and george do.
    //ryan's discounted total would be 220 after the 12% discount
    //george's discounted total would be 281.60 after the 12% discount

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    /*
const books = [
        {author: {firstname: 'Shea ', lastname: 'Serrano'}, title: 'Basketball (and Other Things)', bookNumber: '1'},
        {author: {firstname: 'Shea ', lastname: 'Serrano'}, title: 'Movies (and Other Things)', bookNumber: '2'},
        {author: {firstname: 'Suzanne ', lastname: 'Collins'}, title: 'The Hunger Games', bookNumber: '3' },
        {author: {firstname: 'James ', lastname: 'Dashner'}, title: 'The Maze Runner', bookNumber: '4' },
        {author: {firstname: 'Ransom ', lastname: 'Riggs'}, title: "Miss Peregrine's Home for Peculiar Children", bookNumber: '5'},
    ]; console.log(books[0].title);
*/
   let books = [];
    books.push(createBook("Basketball (and Other Things)", "Shea Serrano"));
    books.push(createBook("Movies (and Other Things)", "Shea Serrano"))
    books.push(createBook("The Hunger Games", "Suzanne Collins"));
    books.push(createBook("The Maze Runner", "James Dashner"));
    books.push(createBook("Miss Peregrine's Home for Peculiar Children", "Ransom Riggs"));



    /**
     *
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(books, index){
        showBookInfo(books, index);
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        let name = author.split(" ")
        let firstName = name[0];
        let lastName = name[1];
        return {
            title : title,
            author : {
                firstName: firstName,
                lastName: lastName
            }
        }
    }
    console.log(createBook("The Rap Year Book", "Shea Serrano" ));

function showBookInfo(book, index) {
    console.log("book #", index + 1);
    console.log("Title: " +book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
}

})();