# Solution

Hate this one, but the principle is simpler than I always think. Basically, the
idea is that one side of a sorted and rotated array always remains sorted. The
trick is to check which side is sorted, and then check if the target either
exists within that sorted section or not. Things do get a little tricky with the
`<=`.

>

| Time | Space |
| ---- | ----- |
| 0(n) | 0(1)  |
