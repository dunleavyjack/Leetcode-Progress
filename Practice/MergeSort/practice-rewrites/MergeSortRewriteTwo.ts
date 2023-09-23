const merge = (arrOne: number[], arrTwo: number[]): number[] => {
  let result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      result.push(arrOne[i]);
      i++;
    } else {
      result.push(arrTwo[j]);
      j++;
    }
  }

  // Handle leftover values in i and j
  while (i < arrOne.length) {
    result.push(arrOne[i])
    i++;
  }

  while (j < arrTwo.length) {
    result.push(arrTwo[j])
    j++;
  }

  return result
}

const mergeSort = (arr: number[]): number[] => {
  // Base case
  if (arr.length <= 1) return arr;

  // Split left and right side
  let mid: number = Math.floor(arr.length / 2);

  // Recursively call mergeSort on left and right side
  let leftSide: number[] = mergeSort(arr.slice(0, mid));
  let rightSide: number[] = mergeSort(arr.slice(mid));

  // Use merge function (defined above) to merge sorted arrays together
  return merge(leftSide, rightSide);
}

console.log(mergeSort([5, 4, 3, 2, 1]))
