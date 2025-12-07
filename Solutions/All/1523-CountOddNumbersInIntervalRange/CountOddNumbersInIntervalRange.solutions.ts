export function countOdds(low: number, high: number): number {
  const diff = high - low;
  const lowIsEven = low % 2 === 0;
  const highIsEven = high % 2 === 0;

  if (lowIsEven && highIsEven) {
    return Math.floor(diff / 2);
  } else {
    return Math.floor(diff / 2) + 1;
  }
}
