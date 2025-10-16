function myPow(x: number, n: number): number {
  function pow(num: number, times: number) {
    // Anything to the power of 0 is 1
    if (times === 0) return 1;

    // Divide the number of computations in half
    const half = pow(num, Math.floor(times / 2));

    // If the number is even,
    if (times % 2 === 0) {
      return half * half;
    } else {
      return num * half * half;
    }
  }

  return n > 0 ? pow(x, n) : pow(1 / x, -n);
}
