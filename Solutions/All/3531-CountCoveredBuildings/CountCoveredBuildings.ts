function countCoveredBuildings(n: number, buildings: number[][]): number {
  let xMap = new Map<number, { minY: number; maxY: number }>();
  let yMap = new Map<number, { minX: number; maxX: number }>();

  for (let [x, y] of buildings) {
    if (xMap.has(x)) {
      let { minY, maxY } = xMap.get(x)!;
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      xMap.set(x, { minY, maxY });
    } else {
      xMap.set(x, { minY: y, maxY: y });
    }

    if (yMap.has(y)) {
      let { minX, maxX } = yMap.get(y)!;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      yMap.set(y, { minX, maxX });
    } else {
      yMap.set(y, { minX: x, maxX: x });
    }
  }

  let coveredBuildings = 0;
  for (let [x, y] of buildings) {
    const { minY, maxY } = xMap.get(x)!;
    const { minX, maxX } = yMap.get(y)!;

    if (minX < x && minY < y && x < maxX && y < maxY) coveredBuildings++;
  }

  return coveredBuildings;
}
