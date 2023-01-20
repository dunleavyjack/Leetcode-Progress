const binarySearch = (nums: number[], target: number): number => {
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number = Math.floor((left + right) / 2);

  while (left <= right && target !== nums[mid]) {
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1
    mid = Math.floor((left + right) / 2)
  }

  return target === nums[mid] ? mid : - 1

}


console.log(binarySearch([1, 2, 3, 4, 5], 1))
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
