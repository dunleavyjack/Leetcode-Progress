export { };

const merge = (arrOne: number[], arrTwo: number[]) => {
  let result: number[] = []

  // Init two pointers
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
  // Base Case
  if (arr.length <= 1) return arr;

  // Divide the current array in half
  const mid: number = Math.floor(arr.length / 2);
  const leftSide: number[] = mergeSort(arr.slice(0, mid));
  const rightSide: number[] = mergeSort(arr.slice(mid));
  return merge(leftSide, rightSide);
};

console.log(mergeSort([5, 4, 3, 2, 1]))
