const smartPhoneActivities = [];
const usageLimit = 120;

function addActivity(date, activity, duration, activities) {
    if (typeof date !== "string") {
        console.log("DATE MUST BE A STRING!");
        return;
    } else if (typeof activity !== "string") {
        console.log("ACTIVITY MUST BE A STRING!");
        return;
    } else if (typeof duration !== "number") {
        console.log("DURATION MUST BE A NUMBER!");
        return;
    } else {
        activities.push({
            date: date,
            activity: activity,
            duration: duration
        })
    }
}

function timeSpent(activities) {
    let totalDuration = 0;
    for (let i = 0; i<activities.length; i++) {
    totalDuration += activities[i]["duration"];
    }
    return totalDuration;
}

function showStatus (activities, limit) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    } 

    const totalTime = timeSpent(activities);
    const amountOfActivities = activities.length
    const amountOfActivitieString = amountOfActivities > 1 ? `${amountOfActivities} activities. They amount to` : `${amountOfActivities} activity. It amounts to`;

    console.log(`You have added ${amountOfActivitieString} ${totalTime} min. of usage.`)

    if (totalTime>limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}

addActivity("10-05-2023", "Youtube", 30, smartPhoneActivities);
addActivity("10-05-2023", "Instagram", 95, smartPhoneActivities);
console.log(smartPhoneActivities);
showStatus(smartPhoneActivities, usageLimit);


// EXTRA FEATURE: WHAT APP DID YOU USE THE MOST?

function appBalance(activities) {
    const eachAppTime = {};
    let total
    for (let i = 0; i<activities.length; i++) {
        const appName = activities[i].activity;
        const appTime = activities[i].duration;
        eachAppTime[appName] = appTime;
    }

    let mostTimeSpent = -Infinity;
    let mostUsedApp = "";

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

function present(balance) {
    console.log(`Your most used app today was ${balance.mostUsedApp}. That's ${balance.mostUsedAppPercentage}% of yor screen time.`)
}

const balance = appBalance(smartPhoneActivities);
present(balance);