function numSpecial(mat: number[][]): number {
    let result = 0;
    let numRows = mat.length;
    let numCols = mat[0].length;

    let rows = new Array(numRows).fill(0);
    let cols = new Array(numCols).fill(0);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (mat[i][j] === 1) {
                rows[i] += 1;
                cols[j] += 1;
            }
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                result += 1;
            }
        }
    }

    return result;
}
