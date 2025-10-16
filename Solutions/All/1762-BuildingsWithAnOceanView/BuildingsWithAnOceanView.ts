function findBuildings(heights: number[]): number[] {
  // Use a max value to store the heighest building.
  let max = 0;
  // Use a num array to store the result
  let viewIndexes: number[] = [];

  // Iterate backwards through the input, checking for values
  // greater than the max. When this happes, add the index to the
  // result array and update max.
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] <= max) continue;

    viewIndexes.unshift(i);
    max = heights[i];
  }

  // Return the result
  return viewIndexes;
}
