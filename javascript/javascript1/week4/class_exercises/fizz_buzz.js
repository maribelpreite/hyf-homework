function fizzBuzzCalculator (n,m) {
    const numbers1to100 = [];
    for (let i = 1; i<=100; i++) {
        if (i%n === 0 && i%m === 0) {
            numbers1to100.push("Fizz Buzz");
        } else if (i%n === 0) {
            numbers1to100.push("Fizz");
        } else if (i%m  === 0) {
            numbers1to100.push("Buzz");
        } else {
            numbers1to100.push(i);
        }  
    }
    return numbers1to100;
}

const numbersList = fizzBuzzCalculator(3, 5);
console.log(numbersList);