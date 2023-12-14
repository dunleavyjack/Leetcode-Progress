function onesMinusZeros(grid: number[][]): number[][] {
    let numRow = grid.length;
    let numCol = grid[0].length;

    let onesRow = new Array(numRow).fill(0);
    let zerosRow = new Array(numRow).fill(0);

    let onesCol = new Array(numCol).fill(0);
    let zerosCol = new Array(numCol).fill(0);

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (grid[i][j] === 1) {
                onesRow[i] += 1;
                onesCol[j] += 1;
            } else {
                zerosRow[i] += 1;
                zerosCol[j] += 1;
            }
        }
    }

    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            grid[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return grid;
}
