# Notes: LC 54 Spiral Matrix

The two tricks here are to order the list of directions to be RIGHT, DOWN, LEFT,
and then UP. Also, to use the mod operator along with the length of the list you
are iterating through to cycle back to the beginning.

| Time      | Space     |
| --------- | --------- |
| O(n \* m) | O(n \* m) |
