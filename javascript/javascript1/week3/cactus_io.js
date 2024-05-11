const smartPhoneActivities = [];
const usageLimit = 120;

function addActivity(activity, duration, activities) {
    const errorMessages = [];
    const errorMessage = [
        "ACTIVITY MUST BE A STRING!",
        "DURATION MUST BE A NUMBER!",
    ]

    if (typeof activity !== "string") {
        errorMessages.push(errorMessage[0]);
    } 
    
    if (typeof duration !== "number") {
        errorMessages.push(errorMessage[1]);
    } 
    
    if (errorMessages.length > 0) {
        console.log(errorMessages);
        return;
    } else {
        activities.push({
            date: new Date().toLocaleDateString("en-GB"),
            activity: activity,
            duration: duration
        })
    }
}

function timeSpent(activities) {
    const today = new Date ();
    const todayDate = new Date().toLocaleDateString("en-GB");

    let totalDuration = 0;
    for (let i = 0; i<activities.length; i++) {
        if (activities[i]["date"] === todayDate) {
            totalDuration += activities[i].duration;
        }
    }
    return totalDuration;
}

function showStatus (activities, limit) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    } 

    const totalTime = timeSpent(activities);
    const amountOfActivities = activities.length;
    const amountOfActivitieString = amountOfActivities > 1 ? `${amountOfActivities} activities. They amount to` : `${amountOfActivities} activity. It amounts to`;

    console.log(`You have added ${amountOfActivitieString} ${totalTime} min. of usage.`)

    if (totalTime>limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}

addActivity("Youtube", 30, smartPhoneActivities);
addActivity("Instagram", 95, smartPhoneActivities);
console.log(smartPhoneActivities);
showStatus(smartPhoneActivities, usageLimit);


// OPTIONAL: WHAT APP DID YOU USE THE MOST?

function appDurations (activities) {
    const eachAppTime = {};
    for (let i = 0; i<activities.length; i++) {
        const appName = activities[i].activity;
        const appTime = activities[i].duration;
        eachAppTime[appName] = appTime;
    }
    return eachAppTime;
}
function appBalance(activities) {
    
    let mostTimeSpent = -Infinity;
    let mostUsedApp = "";
    const eachAppTime = appDurations(activities);

    for (const appName in eachAppTime) {
        const value = eachAppTime[appName];

        if (value>mostTimeSpent) {
            mostTimeSpent = value;
            mostUsedApp = appName;
        }
    }
    const totalTime = timeSpent(activities);
    const mostUsedAppPercentage = mostTimeSpent/totalTime*100;

    return {mostUsedApp, mostUsedAppPercentage};
}

function balancePresent(balance) {
    console.log(`Your most used app today was ${balance.mostUsedApp}. That's ${balance.mostUsedAppPercentage}% of your total screen time.`)
}

const balance = appBalance(smartPhoneActivities);
balancePresent(balance);

// EXTRA FEATURE: SINGLE APP STATISTICS
function appStatistics (activities, specificApp) {
    const eachAppTime = appDurations(activities);

    if (eachAppTime.hasOwnProperty(specificApp)) {
        const appTime = eachAppTime[specificApp];
        const totalTime = timeSpent(activities);
        const appTimePercentage = appTime/totalTime*100;
        return {specificApp, appTime, appTimePercentage};
    } else {
        return specificApp;
    }
}

function statisticsPresent(statistics) {
    if (typeof statistics === "object") {
        console.log(`You spent ${statistics.appTime} minutes on ${statistics.specificApp} today. That's ${statistics.appTimePercentage}% of your total screen time.`);
    } else {
        console.log(`The required application ${statistics.specificApp} has not been used today.`);
    }
}

const statistics = appStatistics(smartPhoneActivities, "Youtube");
statisticsPresent(statistics);
