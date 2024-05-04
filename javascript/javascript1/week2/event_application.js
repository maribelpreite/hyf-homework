const daysSinceToday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

function getEventWeekday(number) {
    const todayIs = new Date().getDay();
    console.log(`It will be ${daysSinceToday[(todayIs + number)%7]} in ${number} days`);
}

getEventWeekday(10);
getEventWeekday(2);