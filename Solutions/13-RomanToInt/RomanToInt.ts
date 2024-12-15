function romanToInt(s: string): number {
  // Create a readonly object to store the symbol to int conversions
  const RomanSymbolToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as const;

  // Initialize and set a result variable to 0
  let result = 0;

  // Iterate backwards!! through the input string.
  // Check if the current character is one of the special "subtraction" ones.
  // If it is, and the "previous symbol" is one that gets decreased by it, decrease the total and continue out of the loop.
  // Otherwise, add the value of that symbol to the result
  for (let i = s.length - 1; i >= 0; i--) {
    const symbol = s[i];
    const previousSymbol = s[i + 1]; // Note: Previous symbol visited going backwards through string.

    // Decrement 1 if the symbol is "I" and the symbol before is a "V" or "X"
    if (symbol === "I") {
      if (
        previousSymbol &&
        (previousSymbol === "V" || previousSymbol === "X")
      ) {
        result -= RomanSymbolToInt[symbol];
        continue;
      }
    }

    // Decrement 10 if the symbol is "X" and the symbol before is a "L" or "C"
    if (symbol === "X") {
      if (
        previousSymbol &&
        (previousSymbol === "L" || previousSymbol === "C")
      ) {
        result -= RomanSymbolToInt[symbol];
        continue;
      }
    }

    // Decrement 100 if the symbol is "C" and the symbol before is a "D" or "M"
    if (symbol === "C") {
      if (
        previousSymbol &&
        (previousSymbol === "D" || previousSymbol === "M")
      ) {
        result -= RomanSymbolToInt[symbol];
        continue;
      }
    }

    // Otherwise, add the total
    result += RomanSymbolToInt[symbol];
  }

  return result;
}
