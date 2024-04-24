// Two of your friends are considering buying a house, but cannot figure out what the right price should be. Your friends know the width, the height and the depth of the house and the garden size. Lets help them figure out if they paid too much:

// We have made our own formula for calculating the price of a house. This formula is VERY simplified and not at all close to the real calculation which can get quite complicated:

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 

// Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

// Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.

const buyer = "Peter"
const houseWidth = 8;
const houseDepth = 10;
const houseHight = 10;
const gardenSizeInM2 = 100;
const pays = 2500000;

let volumeInMeters = houseWidth * houseDepth * houseHight;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

let amountDescription;

if (pays>housePrice) {
    amountDescription = " too much.";
} else if (pays<housePrice){
    amountDescription = " too little.";
} else {
    amountDescription = " a fair price."
}

console.log(buyer + " is paying" + amountDescription + " The fair price is $" + housePrice + ".")

const buyer2 = "Julia"
const houseWidth2 = 5;
const houseDepth2 = 11;
const houseHight2 = 8;
const gardenSizeInM22 = 70;
const pays2 = 1000000;

let volumeInMeters2 = houseWidth2 * houseDepth2 * houseHight2;
let housePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM22 * 300;

let amountDescription2;

if (pays2>housePrice2) {
    amountDescription2 = " too much.";
} else if (pays2<housePrice2){
    amountDescription2 = " too little.";
} else {
    amountDescription2 = " a fair price."
}

console.log(buyer2 + " is paying" + amountDescription2 + " The fair price is $" + housePrice2 + ".")