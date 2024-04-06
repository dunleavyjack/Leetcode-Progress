1.  Two passes. First pass to remove any trailing `"("` and second pass to remove any trailing `")"`.
2.  Trailing parenthesis is determined by using two vars to count the number of open and closed.
    If the open count (or closed count on the second pass) is greater than the other, it means there is trailing parenthesis.
