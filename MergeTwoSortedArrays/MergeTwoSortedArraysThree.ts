const merge = (arrOne: number[], arrTwo: number[]): number[] => {
  let result: number[] = []
  // Initialize two pointers at the start of each array 
  let i: number = 0;
  let j: number = 0;

  // Loop though arrOne and arrTwo comparing values.
  // Use i and j to break to the loop if their value goes out of bounds of one array.
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      result.push(arrOne[i]);
      i++;
    } else {
      result.push(arrTwo[j])
      j++;
    }
  }

  // Add any leftover from arrOne to result
  while (i < arrOne.length) {
    result.push(arrOne[i]);
    i++;
  }

  // Add any leftover from arrTwo to result
  while (j < arrTwo.length) {
    result.push(arrTwo[j]);
    j++;
  }


  return result;
}


console.log(merge([], [1, 3, 5]))




