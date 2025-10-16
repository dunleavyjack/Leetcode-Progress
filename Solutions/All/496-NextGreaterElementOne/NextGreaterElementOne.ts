function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // 1. Create an array (nextGreaterNums) that contains the next greater element for each num in nums2
  const stack: number[] = []; // indexes of a num in nums2
  const nextGreaterNums = Array(nums2.length).fill(-1);

  for (let i = 0; i < nums2.length; i++) {
    // If the stack has values and the current num is greater than the last value in stack,
    // pop that last value from the stack and assign the current num to it's index in `nextGreaterNums`
    if (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
        const lastIndexInStack = stack.pop() as number;
        nextGreaterNums[lastIndexInStack] = nums2[i];
      }
    }

    // Always push into the stack
    stack.push(i);
  }

  // 2. Convert nums2 into a hash map containing each num as the key and the 'next greater num' as the value
  const map = new Map<number, number>(); // num from nums2: next greater number
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], nextGreaterNums[i]);
  }

  // 3. Iterate though nums2 and retrieve the nextGreaterValue from the stack and assign it in place.
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.get(nums1[i]) as number;
  }

  // Return `nums1`, which now has the result
  return nums1;
}
