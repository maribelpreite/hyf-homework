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

const clothesToWear = whatToWearBasedOnTemp(18);
console.log("You should put on " + clothesToWear);