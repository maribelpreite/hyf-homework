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


function showStatus (activities, limit) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    } 
    
    let totalDuration = 0;
    for (let i = 0; i<activities.length; i++) {
    totalDuration += activities[i].duration;
    }

    const amountOfActivities = activities.length
    const amountOfActivitieString = amountOfActivities > 1 ? `${amountOfActivities} activities. They amount to` : `${amountOfActivities} activity. It amounts to`;
    console.log(`You have added ${amountOfActivitieString} ${totalDuration} min. of usage.`)

    if (totalDuration>limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}

addActivity("10-05-2023", "Youtube", 30, smartPhoneActivities);
console.log(smartPhoneActivities);

showStatus(smartPhoneActivities, usageLimit);