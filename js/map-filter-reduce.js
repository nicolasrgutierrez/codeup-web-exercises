"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//
const threeLanguageUsers = users.filter(function (user) {
    return user.languages.length >= 3
});
console.log(threeLanguageUsers);
//

//
const emailString = users.map(function (users) {
    return users.email
});
console.log(emailString);
//

//
const totalYears = users.reduce((total, users) => {
    return total + users.yearsOfExperience;
}, 0);
console.log(totalYears);

const avgYears = totalYears / users.length;
console.log(avgYears);
//

//
const longestEmail = users.reduce(function (currentLongestEmail, user) {

    if (user.email.length > currentLongestEmail.email.length) {
        return user
    }else {
        return currentLongestEmail
    }
}, users[0]);
console.log(longestEmail);
//

//
const nameString = users.reduce(function(accumulator, user) {
    if(accumulator === '') {
        return "Your instructors are: " + user.name
    }else {
        return accumulator + ', ' + user.name
    }
}, '');
console.log(nameString + '.');


//BONUS//
const concatLangs = users.reduce(function (accumulator, user) {
    return accumulator.concat(user.languages)
}, []);
console.log(concatLangs);
let uniqueLangs = concatLangs.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator
}, [])
console.log(uniqueLangs);