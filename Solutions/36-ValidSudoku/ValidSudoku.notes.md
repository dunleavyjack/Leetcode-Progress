# Solution Notes

This one is somehow also simpler and harder than it seems. There are
two main tricks to know here. First, you'll need to figure out the
formula for identifying which grid/box each number is currently in.

That formula is:

```typescript
const grid = Math.floor(row / 3) * 3 + Math.floor(col / 3);
```

The output will be a number from 1 - 9 representing the grid.

The other thing to figure out is that instead of creating separate sets
for rows, columns, and grids you can create a single set and use this pattern:

```typescript
set.add("row-${row}-${cellValue}");
```

This way, you only ever need a single set.
