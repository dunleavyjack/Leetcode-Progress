function carFleet(target: number, position: number[], speed: number[]): number {
  const positionToSpeed = new Map<number, number>(); // { position: speedAtThatPosition }
  for (let i = 0; i < position.length; i++) {
    positionToSpeed.set(position[i], speed[i]);
  }

  const positionDescendingOrder = position.sort((a, b) => b - a);
  const fleetStack: number[] = [];

  for (const position of positionDescendingOrder) {
    const timeToTarget = (target - position) / positionToSpeed.get(position)!;

    if (
      !fleetStack.length ||
      fleetStack[fleetStack.length - 1] < timeToTarget
    ) {
      fleetStack.push(timeToTarget);
    }
  }

  return fleetStack.length;
}
