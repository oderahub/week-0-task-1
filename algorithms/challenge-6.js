function fizzBuzz(num) {
    if (num % 3 ==0 && num % 5 === 0) {
        return "fizzbuzz";
    } 
    else if (num % 5 === 0) {
        return "buzz";
    } 
    else if (num % 3 === 0)
        return "fizz";
    
    else {
        return num;
    }
}
console.log(fizzBuzz(15))

module.exports = fizzBuzz;
