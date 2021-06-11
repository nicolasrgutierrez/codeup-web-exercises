(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(circle.radius,2);
        },

        logInfo: function (doRounding) {
            //
            const area = circle.getArea;
            if (doRounding === true) {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(area()));
            } if (doRounding === false) {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + area());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log(circle.getArea())
})();
