function carFleet(target: number, position: number[], speed: number[]): number {
  const carSpeed = new Map<number, number>(); // { position, speed }
  const stack: number[] = [];

  position.forEach((p, i) => {
    carSpeed.set(p, speed[i]);
  });

  position.sort((a, b) => b - a);

  for (let i = 0; i < position.length; i++) {
    const currentSpeed = carSpeed.get(position[i]) as number;
    const timeUntilTarget = (target - position[i]) / currentSpeed;
    const lastTimeInStack = stack[stack.length - 1];

    if (stack.length === 0 || timeUntilTarget > lastTimeInStack) {
      stack.push(timeUntilTarget);
    }
  }

  return stack.length;
}
