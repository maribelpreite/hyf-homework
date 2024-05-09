// DATA
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  // LOGIC
function estimatedTime(speed, destinationDistance) {
    const timeFloat = travelInformation["destinationDistance"]/travelInformation["speed"];
    const hour = Math.floor(timeFloat);
    const minutesFloat = (timeFloat - hour) * 60;
    const minutes = Math.round(minutesFloat);
    return {hour, minutes};
}

// RENDER
 function present (time) {
  const hourString = time.hour > 1 ? `${time.hour} hours` : `${time.hour} hour`;
  const minuteString = time.minutes > 1 ? `${time.minutes} minutes` : `${time.minutes} minute`;
  console.log(`${hourString} and ${minuteString}`)
} 

  const travelTime = estimatedTime(travelInformation);
  present(travelTime); 