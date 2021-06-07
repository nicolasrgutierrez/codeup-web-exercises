(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     *
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    console.log(" ");
//
    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
    console.log(" ");
//
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    console.log(" ");
//
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
    console.log(" ");
//
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth');
    console.log(index);
//
    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);
    console.log(" ");
//
    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);
})();
