//Que - what are conditional statements ? Explain conditional statements with syntax and examples ?

//Ans - Conditional statements are used to perform different actions based on different conditions.

// Very often when you write code, you want to perform different actions for different decisions.

// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if => to specify a block of code to be executed, if a specified condition is true
// Use else => to specify a block of code to be executed, if the same condition is false
// Use else if => to specify a new condition to test, if the first condition is false
// Use switch => to specify many alternative blocks of code to be executed

var a = 12;
var b = 9;

if (a > b) {
    console.log('a is greater');
} else {
    console.log('b is greater');
}

var day = new Date().getDay();
switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = none;

}
console.log('Today is ',day);
