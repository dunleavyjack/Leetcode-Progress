export { };

const searchRange = (nums: number[], target: number): number[] => {
  // Impliment binary search for 0(log n) runtime
  // Create left and right pointer
  let left: number = 0;
  let right: number = nums.length - 1;

  // Create middle pointer
  let mid = Math.floor((left + right) / 2)

  while (left < right && target !== nums[mid]) {
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1
    }

    mid = Math.floor((left + right) / 2)
  }

  if (nums[mid] !== target) {
    return [-1, 1]
  }

  let highestMid: number = mid;
  let lowestMid: number = mid;

  while (nums[highestMid] === nums[mid]) {
    if (nums[highestMid + 1] === nums[mid]) {
      highestMid++
    } else break
  }

  while (nums[lowestMid] === nums[mid]) {
    if (nums[lowestMid - 1] === nums[mid]) {
      lowestMid--;
    } else break;
  }

  return [lowestMid, highestMid];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
