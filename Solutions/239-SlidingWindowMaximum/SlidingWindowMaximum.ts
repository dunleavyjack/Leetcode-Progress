function maxSlidingWindow(nums: number[], k: number): number[] {
  let result: number[] = [];
  let deque: number[] = []; // monotonically decreasing indexes. first index will be max num!

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Get rid of any elements that are less than the current right element
    while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
      deque.pop();
    }

    // Add the current right element
    deque.push(right);

    // Remove the left most element if out of bounds of the window
    if (deque.length && left > deque[0]) {
      deque.shift();
    }

    // Add the largest element (first in queue) to the result if window is size k
    const windowSize = right - left + 1;
    if (windowSize === k) {
      result.push(nums[deque[0]]);
      left++;
    }

    right++;
  }

  return result;
}
