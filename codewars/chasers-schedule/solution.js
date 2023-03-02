function chaserSchedule(speed, time) {
  let distance = speed * time;
  const maxSprints = Math.ceil(time / 2);

  for (let i = 0; i < maxSprints; i++) {
    if (speed - 3 * i > 0) {
      distance += speed - 3 * i;
    }
  }
  return distance;
}

module.exports = chaserSchedule;
