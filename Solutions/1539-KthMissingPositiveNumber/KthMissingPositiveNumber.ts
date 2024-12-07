export function findKthPositive(arr: number[], k: number): number {
  const missingNumbers: number[] = [];
  let curr = 0;

  for (let numericalOrder = 1; missingNumbers.length <= k; numericalOrder++) {
    if (numericalOrder !== arr[curr]) {
      missingNumbers.push(numericalOrder);
    } else {
      curr++;
    }
  }

  return missingNumbers[k - 1];
}
