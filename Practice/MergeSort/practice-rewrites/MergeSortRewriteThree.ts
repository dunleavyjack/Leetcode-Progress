const merge = (arrOne: number[], arrTwo: number[]): number[] => {
  // Create array for result
  let result: number[] = [];

  // Create one pointer for each incoming array
  let i: number = 0;
  let j: number = 0;

  // Iterate over the portions of each array that have equal length
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      result.push(arrOne[i]);
      i++;
    } else {
      result.push(arrTwo[j]);
      j++;
    }
  }

  // Handle i leftover
  while (i < arrOne.length) {
    result.push(arrOne[i]);
    i++;
  }

  // Handle j leftover
  while (j < arrTwo.length) {
    result.push(arrTwo[j]);
    j++;
  }

  // Send back the result array
  return result;
}


const mergeSort = (nums: number[]): number[] => {
  // Base case
  if (nums.length <= 1) return nums;

  // Split array in half using middle index
  const mid: number = Math.floor(nums.length / 2)

  // Recursively call merge sort on each half of array
  const leftSide: number[] = mergeSort(nums.slice(0, mid));
  const rightSide: number[] = mergeSort(nums.slice(mid));
  return merge(leftSide, rightSide);

}

// Driver code to test result
console.log(mergeSort([5, 4, 3, 2, 1]));
