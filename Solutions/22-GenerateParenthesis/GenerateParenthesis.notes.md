# Notes: LC 22 Generate Parenthesis

Some solutions suggest using a stack for this one, but imo it's more
intuitive to use back tacking.

For the back tracking function, it will accept two parameters: a count of open
parenthesis and closing parenthesis.

Explanation:

1. Base case: When the current combination reaches the desired length `(n * 2)`.

2. Decision 1: If the open parenthesis count is lower than n, add an open parenthesis.

3. Decision 2: If the open parenthesis count higher than the closing parenthesis
   count, add a closing parenthesis.
