const merge = (arrOne: number[], arrTwo: number[]): number[] => {
  let result: number[] = []

  // Create two pointers
  let i: number = 0;
  let j: number = 0;

  // Loop can compare i and j values for portion of array they both have length
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[i]) {
      result.push(arrOne[i]);
      i++;
    } else {
      result.push(arrTwo[j])
      j++;
    }
  }

  // Add any leftover from both arrays
  while (i < arrOne.length) {
    result.push(arrOne[i]);
    i++;
  }

  while (j < arrTwo.length) {
    result.push(arrTwo[j]);
    j++;
  }

  return result
}

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr // Base case

  let mid = Math.floor(arr.length / 2)
  let leftSide = mergeSort(arr.slice(0, mid))
  let rightSide = mergeSort(arr.slice(mid))
  return merge(leftSide, rightSide);
}

console.log(mergeSort([5, 4, 3, 2, 1]));

