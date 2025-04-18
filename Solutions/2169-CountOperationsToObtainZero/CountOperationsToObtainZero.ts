function countOperations(
  num1: number,
  num2: number,
  numOperations: number = 0,
): number {
  // Base case: If either num1 or num2 is 0, we've reached a solution
  if (num1 === 0 || num2 === 0) return numOperations;

  // Otherwise, subtract the smaller num from the larger
  if (num1 >= num2) {
    num1 -= num2;
  } else {
    num2 -= num1;
  }

  // Increment the number of operations
  numOperations++;
  // Use recursion to continue the next operation
  return countOperations(num1, num2, numOperations);
}
