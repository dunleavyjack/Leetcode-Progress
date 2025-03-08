function carFleet(target: number, position: number[], speed: number[]): number {
  let stack: number[] = [];

  // Create and populate a map of each car's position to it's speed
  const carPositionToSpeedMap = new Map<number, number>(); // { position: speed }
  position.forEach((p, i) => {
    carPositionToSpeedMap.set(p, speed[i]);
  });

  // Sort the positions in descending order
  position.sort((a, b) => b - a);

  // Iterate through all positions, calculating the time each car will take to reach the target.
  for (let p of position) {
    const timeToReachTarget = (target - p) / carPositionToSpeedMap.get(p)!;

    // If the current time to reach the target is greater than the last in the stack, add it
    if (!stack.length || timeToReachTarget > stack[stack.length - 1]) {
      stack.push(timeToReachTarget);
    }
  }

  // Return the length of the stack, which will represent the number of car fleets
  return stack.length;
}
