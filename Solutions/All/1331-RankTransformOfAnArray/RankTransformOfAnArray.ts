function arrayRankTransform(arr: number[]): number[] {
  let originalArr: number[] = [...arr];
  const sortedArr = arr.sort((a, b) => a - b);
  const rankMap = new Map<number, number>(); // {num, rank}

  let rank = 0;
  sortedArr.forEach((num, i) => {
    if (i > 0 && num === sortedArr[i - 1]) return;
    else {
      rank++;
      rankMap.set(num, rank);
    }
  });

  originalArr.forEach((num, i) => {
    originalArr[i] = rankMap.get(num) as number;
  });

  return originalArr;
}
