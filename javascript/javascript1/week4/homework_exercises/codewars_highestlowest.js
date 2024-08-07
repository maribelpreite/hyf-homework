/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow (numberString) {
    const values = numberString.split(" ");

    for (let i = 0; i < values.length; i++) {
        values[i] = parseInt(values[i]);
    }

    const highestNumber = Math.max(...values);
    const lowestNumber = Math.min(...values);
    const result = `${highestNumber} ${lowestNumber}`

    return result;
}

const test = highAndLow("1 2 -3 4 5");
console.log(test);