function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let setA = new Set<number>();
  let setB = new Set<number>();

  let result = new Array(A.length).fill(0);

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    let common = 0;
    for (const val of setA) {
      if (setB.has(val)) {
        common++;
      }
    }
    result[i] = common;
  }

  return result;
}
