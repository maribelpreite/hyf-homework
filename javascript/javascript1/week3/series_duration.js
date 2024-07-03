// DATA
const someSeries = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

//LOGIC
  function howMuchTime (seriesDurations) {
    const lifeDays = 29200; // = 80 years
    const timeProperties = ["days", "hours", "minutes"];
    const timeConverter = [1, 24, 1440];
    
    const percentageBySeriesDays = {};
    let totalSeriesPercentage = 0;

for (let i = 0; i<seriesDurations.length; i++) {
    let seriesInDays = 0;
    for (let j = 0; j<timeProperties.length; j++) {
        seriesInDays += (seriesDurations[i][timeProperties[j]])/timeConverter[j];
    }

    let eachSeriesTitle = seriesDurations[i].title;
    let eachSeriesPercentage = (seriesInDays/lifeDays*100).toFixed(3);

    percentageBySeriesDays[eachSeriesTitle] = eachSeriesPercentage;
    totalSeriesPercentage += parseFloat(eachSeriesPercentage);
}

return {
  percentageBySeriesDays,
  totalSeriesPercentage,
};
}

  // RENDER
  function present(percentages) {
  for (const [title, percentage] of Object.entries(percentages.percentageBySeriesDays)) {
    console.log(`${title} took ${percentage}% of my life`);
  }
  console.log(`In total that is ${percentages.totalSeriesPercentage}% of my life`);
}

  const percentages = howMuchTime(someSeries);
  present(percentages);
  