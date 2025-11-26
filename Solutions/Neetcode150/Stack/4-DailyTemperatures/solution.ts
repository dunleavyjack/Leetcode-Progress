function dailyTemperatures(temperatures: number[]): number[] {
  const coldTempIndexes: number[] = []; // [index];
  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      coldTempIndexes.length &&
      temperatures[coldTempIndexes[coldTempIndexes.length - 1]] <
        temperatures[i]
    ) {
      const lastColdIndex = coldTempIndexes.pop()!;
      result[lastColdIndex] = i - lastColdIndex;
    }

    coldTempIndexes.push(i);
  }

  return result;
}
