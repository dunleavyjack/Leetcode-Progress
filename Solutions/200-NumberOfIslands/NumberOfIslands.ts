function numIslands(grid: string[][]): number {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islands = 0;

    const checkIslandDFS = (
        grid: string[][],
        currRow: number,
        currCol: number,
        numRows: number,
        numCols: Number
    ) => {
        if (
            currRow < 0 ||
            currRow >= numRows ||
            currCol < 0 ||
            currCol >= numCols ||
            grid[currRow][currCol] !== '1'
        )
            return;

        grid[currRow][currCol] = '2';

        checkIslandDFS(grid, currRow + 1, currCol, numRows, numCols);
        checkIslandDFS(grid, currRow, currCol + 1, numRows, numCols);
        checkIslandDFS(grid, currRow - 1, currCol, numRows, numCols);
        checkIslandDFS(grid, currRow, currCol - 1, numRows, numCols);
    };

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === '1') {
                checkIslandDFS(grid, row, col, numRows, numCols);
                islands += 1;
            }
        }
    }
    return islands;
}
