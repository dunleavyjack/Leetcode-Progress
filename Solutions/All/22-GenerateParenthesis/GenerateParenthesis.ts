function generateParenthesis(n: number): string[] {
  let result: string[] = [];
  let combination: string[] = [];

  function backtrack(openBrackets: number, closingBrackets: number) {
    // Base case
    if (combination.length === n * 2) {
      result.push(combination.join(""));
    }

    // Decide to add an open bracket if currently less than n.
    if (openBrackets < n) {
      combination.push("(");
      backtrack(openBrackets + 1, closingBrackets);
      combination.pop();
    }

    // Decide to add a closing brakcen when the openbracket count is higher.
    if (openBrackets > closingBrackets) {
      combination.push(")");
      backtrack(openBrackets, closingBrackets + 1);
      combination.pop();
    }
  }

  // Call the recursive function and return the result
  backtrack(0, 0);
  return result;
}
