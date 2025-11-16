# Solution Notes

For this one, the idea is to visit each cell in the grid and track the
occurrence of any non-empty (not `"."`) cells. Since you need to keep track of
the occurrence of numbers by each row, column, and box you could use three
different hash maps. Although, an easier approach is to create three
"signatures" for each cell that identifies either row, column, or box, the
number of that type, and the number of the cell. For example:

```typescript
const num = board[row][col];

const cellSignature = `row-${row}-${num}`;
```

This way, everything can be tracked in a single set.

The trickiest part (for me) is finding out how to determine the box number given
two cell coordinates. The formula is:

```typescript
const boxNumber = Math.floor(row / 3) * 3 + Math.floor(col / 3);
```

So, at each iteration, you need to create three signatures for each cell and
check to see if those signatures already exist in the set. If they do, return
`false`. Otherwise, return `true`!

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |
