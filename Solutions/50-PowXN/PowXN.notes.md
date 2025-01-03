# Notes: LC 50 Pow(x, n)

This problem can be solved easily with a simple, repetitive recursive function.
But, to pass the expected time complexity you need to divide and conquer.

This can be done by calling the function recursively on half of the expected
times to get `half`. Then, if the expected times is even you can simply return
`half * half`. Otherwise, return `originalNum * half * half`.
