function intervalIntersection(
  firstList: number[][],
  secondList: number[][],
): number[][] {
  let listPointerOne = 0;
  let listPointerTwo = 0;
  let intersections: number[][] = [];

  while (
    listPointerOne < firstList.length &&
    listPointerTwo < secondList.length
  ) {
    const [startOne, endOne] = firstList[listPointerOne];
    const [startTwo, endTwo] = secondList[listPointerTwo];

    const start = Math.max(startOne, startTwo);
    const end = Math.min(endOne, endTwo);

    if (start <= end) {
      intersections.push([start, end]);
    }

    if (endOne < endTwo) {
      listPointerOne++;
    } else {
      listPointerTwo++;
    }
  }

  return intersections;
}
