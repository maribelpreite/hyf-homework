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
    return `${hour} hours and ${minutes} minutes`;
}
  
// RENDER
  const travelTime = estimatedTime(travelInformation);
    console.log(travelTime);