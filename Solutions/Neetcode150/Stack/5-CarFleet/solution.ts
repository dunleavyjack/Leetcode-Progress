export function carFleet(
  target: number,
  position: number[],
  speed: number[],
): number {
  const positionToSpeed = new Map<number, number>();
  position.forEach((position, i) => {
    positionToSpeed.set(position, speed[i]);
  });

  const positionsSortedDecreasing = position.sort((a, b) => b - a);
  let fleets: number[] = [];

  for (const position of positionsSortedDecreasing) {
    const speedOfCar = positionToSpeed.get(position)!;
    const timeToTarget = (target - position) / speedOfCar;

    if (!fleets.length || fleets[fleets.length - 1] < timeToTarget) {
      fleets.push(timeToTarget);
    }
  }

  return fleets.length;
}
