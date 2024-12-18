function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack: [number, number][] = []; // [index, height]

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    const height = heights[i];
    while (stack.length && stack[stack.length - 1][1] > height) {
      const [index, height] = stack.pop() as [number, number];
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, height]);
  }

  for (const [index, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
}
