// I PROBABLY OVERCOMPLICATED ON THIS ONE BUT IT WORKS EXACTLY AS I WANTED! 
// I've seen some expandAroundCenter functions on the internet, but decided to stick to my initial original idea for this exercise, which is looping over both ends of the word. Besides, I think it's a little bit more accurate :)
// Any suggestions on how to make the first 3 functions shorter?

function leftToRightCondition (word) {
    let lastMatchIndex = word.length -1
    let firstHalfPalindrome = "";

    let iValueInLastMatch;
    let kValueInLastMatch;

        for (let i = 0; i < word.length; i++) {
            for (let k = lastMatchIndex; k > i; k--) {
                if (word[i] === word[k]) {
                    firstHalfPalindrome += word[i];
                    lastMatchIndex = k - 1;

                    kValueInLastMatch = k;
                    iValueInLastMatch = i;

                    break;
                }
            }
        }
    return {
        word,
        iValueInLastMatch,
        kValueInLastMatch,
        firstHalfPalindrome,
    }
}


function rightToLeftCondition (word) {
    let iValue = 0;
    let firstHalfPalindrome = "";

    let iValueInLastMatch;
    let kValueInLastMatch;

        for (let k = word.length -1; k > iValue; k--) {
            for (let i = iValue; i < k; i++) {
                iValue = i + 1;
                if (word[i] === word[k]) {
                    firstHalfPalindrome += word[i];

                    kValueInLastMatch = k;
                    iValueInLastMatch = i;
                    
                    break;
                }
            }
        }
    return {
        word,
        iValueInLastMatch,
        kValueInLastMatch,
        firstHalfPalindrome,
    }
}

function palindromeCreator (possibilities) {
    const firstHalfPalindrome = possibilities.firstHalfPalindrome;
    const kValueInLastMatch =  possibilities.kValueInLastMatch;
    const iValueInLastMatch = possibilities.iValueInLastMatch;
    const word = possibilities.word;

    let middleString = ""
        for (let z = iValueInLastMatch + 1; z<kValueInLastMatch; z++) {
            middleString += word[z];
        }

    const secondHalfPalindrome = firstHalfPalindrome.split('').reverse().join('');
    const possiblePalindromes = [];

        if (firstHalfPalindrome.length>=1) {
            if (middleString.length > 0) {
                for (let y = 0; y<middleString.length; y++) {
                    possiblePalindromes.push(firstHalfPalindrome + middleString[y] + secondHalfPalindrome);
                } 
            } else {
                possiblePalindromes.push(firstHalfPalindrome + secondHalfPalindrome);
            }
        } 
        return possiblePalindromes;
}


// I still have to get used to .map() and .filter() and how to use them. I'm not very familiar with them, but i tried to find another way to make my code shorter
function findAllPossiblePalindromes(word) {
    const leftToRightPossibilities = palindromeCreator(leftToRightCondition(word));
    const rightToLeftPossibilities = palindromeCreator(rightToLeftCondition(word));
    const allPossiblePalindromes = [...leftToRightPossibilities, ...rightToLeftPossibilities];

    /* for (let i = 0; i<leftToRightPossibilities.length; i++) {
        allPossiblePalindromes.push(leftToRightPossibilities[i]);
    }

    for (let i = 0; i<rightToLeftPossibilities.length; i++) {
        if (!allPossiblePalindromes.includes(rightToLeftPossibilities[i])) {
            allPossiblePalindromes.push(rightToLeftPossibilities[i]); 
        }
    } */

    const filteredPossibilities = allPossiblePalindromes.filter((palindrome, index, newArray) => {
        return newArray.indexOf(palindrome) === index;
    })

    return filteredPossibilities;
}


function findLongestPalindromes (word) {
    const allPossiblePalindromes = findAllPossiblePalindromes(word);

    const palindromesLength = allPossiblePalindromes.map(palindrome => palindrome.length);
    const maxLength = Math.max(...palindromesLength);
    const longestPalindromes = allPossiblePalindromes.filter(palindrome => palindrome.length === maxLength)
    
    if (longestPalindromes.length>=1) {
        return longestPalindromes;
    } else {
        return "No palindromes found"
    }
}


const firstWord = findLongestPalindromes("flor"); 
console.log(firstWord);

const secondWord = findLongestPalindromes("canibal");
console.log(secondWord)

const thirdWord = findLongestPalindromes("mummy"); 
console.log(thirdWord); 

const fourthWord = findLongestPalindromes("manzana");  
console.log(fourthWord);

const fifthWord = findLongestPalindromes("elefante"); 
console.log(fifthWord);

const sixthWord = findLongestPalindromes("mama"); 
console.log(sixthWord);

const seventhWord = findLongestPalindromes("naranja"); 
console.log(seventhWord);

const eighthWord = findLongestPalindromes("floor"); 
console.log(eighthWord);

const ninthWord = findLongestPalindromes("cafeteria"); 
console.log(ninthWord);