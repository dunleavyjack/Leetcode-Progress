function dailyTemperatures(temperatures: number[]): number[] {
  let result = Array(temperatures.length).fill(0);
  let stack: number[] = []; // Contains the index of values in a monotonic, decreasing stack

  for (let i = 0; i < temperatures.length; i++) {
    // While current num greater than last value in stack, remove it and assign the distance to the result
    while (stack && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const lastIndexInStack = stack.pop() as number;
      const daysToWait = i - lastIndexInStack;
      result[lastIndexInStack] = daysToWait;
    }
    stack.push(i);
  }

  return result;
}
