function canSeePersonsCount(heights: number[]): number[] {
  let stack: number[] = [];
  let result = new Array(heights.length).fill(0);

  // Iterate backwards through the input
  for (let i = heights.length - 1; i >= 0; i--) {
    let visible = 0;

    // When the stack is populated, and the current height is greater than the last value in the stack
    // continue to pop that value and increment the count.
    while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
      visible++;
      stack.pop();
    }

    // This was the tricky part for me! If the stack continues to have values,
    // then you can "see" the last value and must increment the count again
    if (stack.length) {
      visible++;
    }

    // Set the result with the count, and push the current index to the stack
    result[i] = visible;
    stack.push(i);
  }

  return result;
}
