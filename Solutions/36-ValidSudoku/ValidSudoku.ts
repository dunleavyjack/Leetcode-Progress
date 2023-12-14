function isValidSudoku(board: string[][]): boolean {
    let rows = Array(9)
        .fill(0)
        .map(() => new Set());
    let cols = Array(9)
        .fill(0)
        .map(() => new Set());
    let boxes = Array(9)
        .fill(0)
        .map(() => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') continue;
            else if (
                rows[i].has(board[i][j]) ||
                cols[j].has(board[i][j]) ||
                boxes[getSubgridIndex([i, j])].has(board[i][j])
            ) {
                return false;
            } else {
                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                boxes[getSubgridIndex([i, j])].add(board[i][j]);
            }
        }
    }

    return true;
}

function getSubgridIndex(point: number[]) {
    const subgridRow = Math.floor(point[0] / 3);
    const subgridCol = Math.floor(point[1] / 3);
    const subgridIndex = subgridRow * (9 / 3) + subgridCol;

    return subgridIndex;
}
