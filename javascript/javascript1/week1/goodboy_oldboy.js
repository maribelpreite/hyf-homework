// The same friend (who by the way loves dogs) asks how old his dog will be in 2045. Hmm you think, lets make this into a product as well! Dogs age can either be measured in dog years or in human years, this we want to take into consideration!

// Like before lets create three variables but this time we call them dogYearOfBirth, dogYearFuture and dogYear. We add an extra variable called shouldShowResultInDogYears. If it is true we should show the result in dog years, if it is false we should show it in human years. What do we call this type of variable? Now dependent on shouldShowResultInDogYears log this string out: "Your dog will be 10 human years old in 2027" or "Your dog will be 70 dog years old in 2027"

const dogYearOfBirth = 2021;
const dogYearFuture = 2029;

let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

let yearsType; 

if (shouldShowResultInDogYears) {
    dogYear *= 7;
    yearsType = " dog ";
} else {
    yearsType = " human "
}

console.log("Your dog will be " + dogYear + yearsType + "years old in " + dogYearFuture)
