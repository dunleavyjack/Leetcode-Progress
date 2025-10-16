# Notes: LC 680 Valid Palindrome II

The solution for this one is very similar to valid palindrome I, although you can't
directly reuse that solution as a helper.

The basic idea is to create two pointers (same as the original valid palindrome),
one on the left and one on the right. Each iteration should bring the two pointers
closer together. If at any point they are not the same, attempt skipping a value
on both the left and the right side, and then using a helper method similar to
the original valid palindrome problem. This seems inefficient, but the solution will
still be 0(n).

Tip: Don't try to pass any substrings. It's more efficient to keep using the original
string when checking if either the right or left side are palindromes with a
single skip.
