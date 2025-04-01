function mostPoints(questions: number[][], index = 0, memo = {}): number {
  if (index >= questions.length) return 0;

  if (index in memo) return memo[index];
  const [points, brainpower] = questions[index];

  const skip = mostPoints(questions, index + 1, memo);
  const take = points + mostPoints(questions, index + 1 + brainpower, memo);
  const result = Math.max(skip, take);

  memo[index] = result;
  return result;
}
