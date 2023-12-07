// write a js function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a clousure to handle different tax rates based on income ranges. test the function with various incomes ? 

var income,tax;
const calculateTax = (income)=>{
    if(income > 100000){
        return  tax = income *.75;
    }else if(income >80000){
        return tax = income*.65;
    }else if(income >60000){
        return tax = income*.55;
    }else if(income > 50000){
        return tax = income*.45;
    }else{
        return tax = income*.25;
    }
}

console.log(calculateTax(34000));
console.log(calculateTax(75000));
console.log(calculateTax(56000));