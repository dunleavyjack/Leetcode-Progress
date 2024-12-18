function dailyTemperatures(temperatures: number[]): number[] {
  // Will contain the amount of days each index in temperatures has to wait until a warmer day occurs
  let answer = new Array(temperatures.length).fill(0);
  // Will contain the indexes of days that have not yet reached a warmer day
  let stack: number[] = [];

  // Iterate through each temperature in temperatures
  for (let i = 0; i < temperatures.length; i++) {
    // If the last value in the stack is less than the current temperature, we've found a warmer day!
    // Pop that value, set the difference to the answer array, and continue to check through the stack
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const lastIndexInStack = stack.pop() as number;
      answer[lastIndexInStack] = i - lastIndexInStack;
    }

    // Always, push the current value to the stack. We haven't found a warmer day for it yet.
    stack.push(i);
  }

  // Return the answer array
  return answer;
}
