// my answer is commented out: didn't pass codewars test this way although it works in my console

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

/* function getCount(str) {
    const strArray = str.toLowerCase().split("");
    const vowels = ["a", "e", "i", "o", "u"];
    
    const foundVowels = strArray.filter (letter => vowels.includes(letter))
    const numberOfVowels = foundVowels.length;

    return `The word ${str} has ${numberOfVowels} vowels.`;
}

const testWord = getCount("ABRACADABRA");
console.log(testWord);

const testWord2 = getCount("pear tree");
console.log(testWord2); */

function getCount(str) {
    const lowerCaseString = str.toLowerCase();
    const regex = /[aeiou]/g; // i can also add i here at the end for case insensitivity
    const numberOfVowels = (lowerCaseString.match(regex) || []).length; //if i don't add || [], when there are no vowels the result of the expression on the left will be null and therefore it will be impossible to get its length
    return numberOfVowels;
}

const testWord = getCount("rgl");
console.log(testWord);