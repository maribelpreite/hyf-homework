const boughtCandies = []
let totalAmount = 0;
function addCandy (candyType, weight) {
    if (candyType === "sweet") {
        boughtCandies.push(weight*0.5);
    } else if (candyType === "chocolate") {
        boughtCandies.push(weight*0.7);
    } else if (candyType === "toffee") {
        boughtCandies.push(weight*1.1);
    } else if (candyType === "chewing-gum") {
        boughtCandies.push(weight*0.03);
    }
}

function totalPrice () {
    for (let i=0; i<boughtCandies.length; i++) {
        totalAmount += boughtCandies[i];
    }
    console.log("Final Price: $" + totalAmount);
}

addCandy("chewing-gum", 30);
addCandy("sweet", 20);
addCandy ("toffee", 40)
console.log(boughtCandies);
totalPrice();

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy () {
    if (amountToSpend > totalAmount) {
        console.log("You have $" + amountToSpend + ". You can buy more, so please do!")
    } else {
        console.log("Enough candy for you!")
    }
}

canBuyMoreCandy();