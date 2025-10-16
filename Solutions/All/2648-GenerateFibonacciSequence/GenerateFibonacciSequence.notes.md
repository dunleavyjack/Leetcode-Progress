# Notes: LC 2648 Generate Fibonacci Sequence

This one mostly deals with knowing generator functions. Each time `next()` is
called on the generator function, the idea is to copy the current previous and
current numbers in the sequence, and then return the sum of their "original"
values. It's also important to note that since Fibonacci starts with `0`, you
have to yield `0` and `1` before starting the logic, otherwise the result (if
you are thinking about the sum of the previous two numbers) will always be `0`.

| Time | Space | | ---- | ----- | | O(1) | O(1) |
