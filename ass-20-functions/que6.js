// write a js function called curry that takes a function as an argument and returns a curried varsion of tat function . The curried function should accept that arguments one at a time and return a new function untill all arguments are provided. then it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.


function curry(curried) {
    return function curried(a) {
        return (b) => {
            return a + b;
        }
    }
}
console.log(curry(2)(3)(4));