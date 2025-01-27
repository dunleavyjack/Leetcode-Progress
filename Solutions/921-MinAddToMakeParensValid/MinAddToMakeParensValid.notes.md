# Solution for LC 921 Make Parenthesis Valid

This one can be solved using a stack (similar to the valid parens problem), but
can be optimized using two variables to track the number of open and closed
parens that are visited, and another to track the number of closed parens that
are encountered without a matching open.
