// Write a js function called factorial that calculates the factorial of non negative integer using recursion. Test the function with different inputs

var num;

function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num-1) 
}

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(0));
console.log(factorial(1));
