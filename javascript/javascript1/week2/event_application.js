const daysSinceToday = [
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday"
]

function getEventWeekday(number) {
    return daysSinceToday[number%7];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));