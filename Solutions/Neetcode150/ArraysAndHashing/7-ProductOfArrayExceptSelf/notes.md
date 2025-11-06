# Notes

This is a common prefix/postfix problem. The idea is traverse the input twice,
once forwards and once backwards. On the forwards iteration, start with a
`prefixProduct`, which will start at `1`. This represents the current product of
all numbers to the left of that number. You start at `1` as a base when
computing products, like `0` for addition.

When you visit each number, set the current prefix product at that number's
index in the result. You're saying: "at this index, the product of all the
numbers to the left (not including me), is this".

Then, create a `postfixProduct` and do the same thing in reverse. The postfix
represents the product of all the numbers to the right of the current number.
This time, when you reach an index, don't just set the `postfixProduct` in the
result. Multiply it by the `prefixProduct`, which is what is currently stored at
that index. You're saying: "this is the product of all the numbers to the left
and all the numbers to the right, not including this one."

| Time  | Space                                 |
| ----- | ------------------------------------- |
| O(n ) | O(1) \* Result stated as not counting |
