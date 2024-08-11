// process.argv = array whose elements are the parts of the command line. [0] is the runtime, [1] is the script (file) and from [2] onwards, there are arguments passed on the command line

const args = process.argv.slice(2);

const numbers = args.map(string => Number(string));
check(numbers);

function check (arguments) {

    if (arguments.length === 0) {
        console.log(`Please provide some numbers!`);
        return;
    }

    const invalidNumbers = arguments.filter(argument => Number.isNaN(argument))
    if (invalidNumbers.length > 0) {
        console.log(`Please provide valid numbers to calculate the average value!`);
        return;
    }

    console.log(avgCalc(arguments));
};

function avgCalc (numbers) {
    let sum = 0;
    numbers.forEach(number => {
    sum += number;
    });

    const avgNumber = sum / numbers.length;
    return `The average is ${avgNumber}`;
}
