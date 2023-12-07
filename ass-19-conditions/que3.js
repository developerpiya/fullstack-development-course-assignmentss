// Que - what are loops and what do we need them ? Explain different types of loops with their syntax and example

// Ans - Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.

// ex=>

//For loop
const number = [2,3,4,5,6,7,8];
for (let i=0;i<number.length-1;i++){
    console.log(number[i]*number[i]*number[i]);
}

//For In loop
console.log('\n');
for(let x in number){
    console.log('using for in loop ',x,number[x]*number[x]*number[x]);
}

//For of loop
console.log('\n');
for(let z of number){
    console.log('using for of loop ',z, z*z*z);
}
console.log('\n');

//while loop
let i=1;
let num = 2;
while(i<11){
    console.log(`2*${i}=${num*i}`);
    i++;
}
console.log('\n');

//do while
let j=1;
let n = 5;
do{
    console.log(`5*${j}=${n*j}`); 
    j++;
}while(j<11);