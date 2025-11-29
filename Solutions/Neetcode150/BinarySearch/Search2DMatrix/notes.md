# Solution

The trick for this one is to realize that, if you go row by row checking the
last number in each row, you only need to perform a "check" on a single row.

This is because of the non-decreasing order of the matrix, so the last value in
each row tells you "no value greater than me exists in any other row". Once you
find a row with a last value greater than the target, you found your row! Just
perform a regular binary search and you're good to go!

| Time       | Space |
| ---------- | ----- |
| 0(M Log N) | 0(1)  |
