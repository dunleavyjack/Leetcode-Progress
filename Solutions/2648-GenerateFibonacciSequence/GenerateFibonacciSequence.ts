function* fibGenerator(): Generator<number, any, number> {
  // Since fibonacci sequence requires two numbers to start, initially yield 0 and 1
  yield 0;
  yield 1;

  // Create variables to store the last two numbers in the sequence.
  let prevNum = 0;
  let currNum = 1;

  // Create an infinite loop (actually required for this problem and recommened by the leetcode hint).
  while (true) {
    // Store the last two values in memory
    const tempPrevNum = prevNum;
    const tempCurrNum = currNum;

    // For the next iteration, set the the previous value to the current.
    prevNum = currNum;

    // For the next iteration, set the current value to the sum of the current and the previous.
    currNum += tempPrevNum;

    // Return the original sum of the previous value and the current.
    yield tempPrevNum + tempCurrNum;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
