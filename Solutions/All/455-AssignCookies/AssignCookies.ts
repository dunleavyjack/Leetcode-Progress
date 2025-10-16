function findContentChildren(g: number[], s: number[]): number {
    let gSorted = g.sort((a, b) => a - b);
    let sSorted = s.sort((a, b) => a - b);

    let gPointer = 0;
    let sPointer = 0;

    while (gPointer < g.length && sPointer < s.length) {
        if (gSorted[gPointer] <= sSorted[sPointer]) {
            gPointer++;
            sPointer++;
        } else {
            sPointer++;
        }
    }

    return gPointer;
}
