"use strict";

console.log("Hello from external JavaScript");

    alert('Welcome to my Website!');

var userInput = prompt('What is your favorite color?');
    alert('Great, ' + userInput + ' is my favorite color too!');

// Answer for Exercise 3 #1 from previous lesson
var exercise1response = prompt( 'You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you do not know yet if they are going to like it). If the price for a movie per day is $3, how much will you have to pay?')

var costOfRentalPerDay = 3;
var totalRentalDays = 9;
var totalCost = (costOfRentalPerDay * totalRentalDays);
    alert('The correct answer is: ' + totalCost);

// Answer for Exercise 3 #2 from previous lesson
var exercise2response = prompt('Suppose you are working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.')

var facebookPay = 10 * 350;
var googlePay = 6 * 400;
var amazonPay = 4 * 380;
var totalPayment = (facebookPay + googlePay + amazonPay);
    alert('Your total payment would be: ' + totalPayment);

// Answer for Exercise 3 #3 from previous lesson

var full = confirm('Is the class full?');
var conflict = confirm('Does the class conflict with your current schedule?');
alert('You can enroll in the class: ' + (full && !conflict));

// Answer for Exercise 3 #4 from previous lesson

var premium = confirm('Are you a Premium member?');
var numberOfItems = Number(prompt('How many items are you purchasing?'));
var offerExp = confirm('Is the offer still valid?');
alert('You can get the discount' +((offerExp) && (premium || (numberOfItems > 2))));












