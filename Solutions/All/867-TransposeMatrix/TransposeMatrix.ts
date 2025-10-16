function transpose(matrix: number[][]): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}
