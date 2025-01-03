function myPow(x: number, n: number): number {
  const originalX = x;

  function pow(num: number, times: number) {
    if (times === 0) return 1;

    const half = pow(num, Math.floor(times / 2));

    if (times % 2 === 0) {
      return half * half;
    } else {
      return num * half * half;
    }
  }

  return n > 0 ? pow(x, n) : pow(1 / x, -n);
}
