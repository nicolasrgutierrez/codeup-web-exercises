"use strict";



function lastCommit(userName) {
    return fetch('https://api.github.com/users/' + userName + `/events/public`,
        {headers: {'Authorization': 'token' + gitPersonalAccessToken}})
        .then((response) => {
            return response.json();
        }). then(function(jsonData) {
            return jsonData[0].created_at;
        });
}

function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(number);
        }, number);
    });
}