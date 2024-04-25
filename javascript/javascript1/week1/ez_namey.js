// At a meetup you overhear a conversation between two developers. It went something like this: "Man I wish picking a startup name was easier! You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome!

// Lets help people who struggle finding a startup name by creating some code!

// Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate".

// Create a variable called startupName that will contain the created startup name.

// Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"

// Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.

// const randomNumber = Math.floor(Math.random() * 10);

const firstWords = [
    "Dream",
    "Innovative",
    "Easy",
    "Collaborative",
    "Smart",
    "Creative",
    "Modern",
    "Trusty",
    "Secure",
    "Speedy"
]

const secondWords = [
    "Data",
    "Technology",
    "Systems",
    "Mobile",
    "Global",
    "World",
    "Travel",
    "Fit",
    "Fly",
    "Solutions"
]

const randomNumberFirstWord = Math.floor(Math.random(firstWords) * 10);
const randomNumberSecondWord = Math.floor(Math.random(secondWords) * 10);

const newStartupName = firstWords[randomNumberFirstWord] + " " + secondWords[randomNumberSecondWord];
const characterCounter = firstWords[randomNumberFirstWord].length + 1 + secondWords[randomNumberSecondWord].length

console.log('The startup: "' + newStartupName + '" contains ' + characterCounter + ' characters.')