function whatToWearBasedOnTemp (temperature) {
    if (temperature<-3) {
        return "a winter jacket";
    } else if (temperature<7){
        return "a light or medium coat";
    } else if (temperature<18){
        return "some fleece";
    } else if (temperature<26){
        return "some short sleeves";
    } else {
        return "some shorts";
    }
}

function randomTemperature (min, max) {
    return Math.random (max-min) + min;
}

let currentTemperature = randomTemperature(-20, 50);
const clothesToWear = whatToWearBasedOnTemp(currentTemperature);

console.log(`You should put on ${clothesToWear}. The temperature outside is ${currentTemperature}`);