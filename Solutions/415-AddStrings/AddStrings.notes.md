# Notes: LC 415 Add Strings

This one can be solved using two pointers, iterating through each stringified
number in both inputs in reverse. For cases when the sum of both numbers is
greater than a single digit, I used another variable, `carry`, to store the
carried over `1`. Since only two digits are being added at a time, that carried
over number will never exceed 1.

Also, the problem specified not converting the stringified numbers into numbers
directly, so I used their character codes instead.
