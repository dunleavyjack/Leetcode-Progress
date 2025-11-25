# Solution

This idea is to create two stacks, one that represents the regular stack and
another that represents the current minimum at that index in the stack. Meaning,
after inserting into both, if you look at index `3` in the stack, then index `3`
in the "minimum stack" should show the minimum number from the beginning of the
regular stack until that index.

This idea is actually pretty simple! It's like using a `currentMinimum` value,
except it get's stored "historically" as the stack grows. This way, when values
are removed from the regular stack, you don't need to do any additional
computation to the "minimum stack", just remove the same amount of values.
