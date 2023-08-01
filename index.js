function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return pickup - 42;
  } else if (pickup < 42) {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(feet) {
  let blocks = distanceFromHqInBlocks(feet);
  return 264 * blocks;
}

function distanceTravelledInFeet(start, destination) {
  const disFeet = start - destination;
  if (disFeet > 0) {
    return disFeet * 264;
  } else if (disFeet < 1) {
    return disFeet * -264;
  }
}

function calculatesFarePrice(start, destination) {
  const fareDis = distanceTravelledInFeet(start, destination);
  if (fareDis <= 400) {
    return 0;
  } else if (fareDis > 400 && fareDis <= 2000) {
    return (fareDis - 400) * 0.02;
  } else if (fareDis > 2000 && fareDis < 2500) {
    return 25;
  } else if (fareDis > 2500) {
    return "cannot travel that far";
  }
}
