# Solution

This is another one that is easier to solve than it seems. Essentially, all you
need is a single stack that you use to track the occurrence of any
"non-operators". When I just redid this problem, I thought you also needed an
"operator stack" to store addition and subtraction operators (thinking that only
multiplication/division would be evaluated immediately), but actually all
operators get handled the same way. As soon as you see one, pop the two last
numbers from the stack and perform the operation.

| Time | Space |
| ---- | ----- |
| 0(n) | 0(n)  |
