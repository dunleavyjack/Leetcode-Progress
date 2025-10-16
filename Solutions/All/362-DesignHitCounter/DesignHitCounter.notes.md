# Notes: LC 362 Design Hit Counter

The trick of for this one is to notice that each call to both `hit` and
`getHits` will be monotonically increasing. So, instead of having to store all
timestamps and hits forever, whenever `getHits` is called you can actually
remove all values that occurred `300` seconds before the time stamp. Because of
this, you should store the values in a queue.

Complexity for `hit()`:

| Time | Space |
| ---- | ----- |
| O(1) | O(1)  |

Complexity for `getHits()`:

| Time | Space |
| ---- | ----- |
| O(k) | O(1)  |

\*`k` is the length of the queue.
