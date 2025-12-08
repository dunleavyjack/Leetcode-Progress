function carFleet(target: number, position: number[], speed: number[]): number {
  const positionToSpeed = new Map<number, number>(); // { position: speedAtThatPosition }
  for (let i = 0; i < position.length; i++) {
    positionToSpeed.set(position[i], speed[i]);
  }

  const positionDescendingOrder = position.sort((a, b) => b - a);
  const fleetStack: number[] = [];

  for (const position of positionDescendingOrder) {
    const arrivalTime = (target - position) / positionToSpeed.get(position)!;

    if (!fleetStack.length || fleetStack[fleetStack.length - 1] < arrivalTime) {
      fleetStack.push(arrivalTime);
    }
  }

  return fleetStack.length;
}
