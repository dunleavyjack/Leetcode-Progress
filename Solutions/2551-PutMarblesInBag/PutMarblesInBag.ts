function putMarbles(weights: number[], k: number): number {
  if (k === 1) {
    return 0;
  }

  const splits: number[] = [];
  for (let i = 1; i < weights.length; i++) {
    splits.push(weights[i - 1] + weights[i]);
  }

  splits.sort((a, b) => a - b);

  const max = splits.slice(-(k - 1)).reduce((acc, cum) => acc + cum);
  const min = splits.slice(0, k - 1).reduce((acc, cum) => acc + cum);

  return max - min;
}
