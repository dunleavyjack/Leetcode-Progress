# Notes: LC 1216 Valid Palindrome III

This one is similar to Valid Palindrome II, and can be solved using recursion.

For Valid Palindrome II (which was about validating a palindrome while allowing
you to remove up to one character), the idea is to use two pointers (one on the
left and one on the right) that are moving closer together. If they point to
different letters, you check both possibilities of removals by calling the
validation function recursively with a left character skipped and again with a
right character skipped.

For this one, the idea is actually really simple. Just add the number of
remaining removals as a parameter to the validating function, and decrement each
time you do a removal. This will pass local test cases but will fail the time
limit on submit. So, add memoization. You can use a string of the left pointer +
the right pointer + the removal remaining as the key, and the boolean result as
the value.
