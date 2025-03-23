# Notes: LC 79 Word Search

Pretty standard dfs problem, using a set to track visited cells. One thing to
keep in mind is that you want to backtrack visited cells off the visited set to
allow for those cells to be visited again (a neighbor might not be the next word
yet, but could be valid later on).

The idea is to iterate through all the cells in the board, looking for the
starting character of the input word. Once that first character is found, you
can call a recursive DFS function. The goal of that function is to first check
if the cell is in bounds in addition to checking if the cell is actually the
letter you want. You also need to ignore the cell if it exists in the `visiting`
set. If any of those cases are true, return false.

Then, you can check if you are at the last letter. This is done by checking if
the current "word index" is at the end of the length of the word. If that's the
case, return true.

Then, for each of the 4 directions, recursively call the dfs function. If that
call returns true, then you also want to return true.

Finally, remove the original cell from the visiting set. If you get here, no
word was found, so also return false.

| Time             | Space |
| ---------------- | ----- |
| O(m \* n \* 3^L) | O(L)  |

## Explanation

- m = number of rows
- n = number of columns
- L = length of input word
