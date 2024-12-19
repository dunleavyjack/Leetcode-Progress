function minEatingSpeed(piles: number[], h: number): number {
  let maxSpeed = Math.max(...piles);
  let minSpeed = 1;

  let minPossibleSpeed = maxSpeed;

  while (minSpeed <= maxSpeed) {
    const speed = Math.floor((minSpeed + maxSpeed) / 2);
    const duration = getEatingDuration(piles, speed);
    if (duration <= h) {
      minPossibleSpeed = Math.min(minPossibleSpeed, speed);
      maxSpeed = speed - 1;
    } else {
      minSpeed = speed + 1;
    }
  }

  return minPossibleSpeed;
}

function getEatingDuration(nums: number[], speed: number) {
  let duration = 0;

  for (let num of nums) {
    duration += Math.ceil(num / speed);
  }

  return duration;
}
