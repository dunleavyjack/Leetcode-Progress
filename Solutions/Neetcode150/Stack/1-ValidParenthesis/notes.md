# Notes

This one is classic stack problem. The idea is to create a stack of all the open
parenthesis, and add an open parenthesis encountered to it as you iterate
through the input. If a closing parenthesis is reached, pop the last value from
the stack and compare. If it's not a match, return false.

Two thing I always forget:

1. Before returning true by default, make sure the stack is empty.
2. Make sure when you pop from the stack, a value exists.
