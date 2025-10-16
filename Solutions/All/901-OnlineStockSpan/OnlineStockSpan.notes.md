# Notes: LC 901 Online Stock Span

Originally I tried this with a basic stack and got a time limit exception on the
literal final test case. It can be improved by making sure the stack is
monotonically decreasing.

The idea is to store not only the price in the stack, but also the "span" for
that price. In this case, the span is the contiguous number of previous prices
that are less than or equal to the latest price.

For example, if the prices are `[5, 1, 2, 3]`, the stack will look like
`[[5, 1], [3, 3]]`. From price `3`, there is a span of 3 prices that are less
than or equal to `3`. From price `5`, there is only one. Prices `1` and `2` are
"skipped" and added to the span for price `3`, making the runtime more
efficient. If a new price is added, for example `6`, the stack will become
`[[6, 5]]`, since 6 is greater than both 3 (which spans 3 prices) and 5 (which
spans 1). 3 + 1 + 1 = 5, considering that 6 adds a new span of 1.

In the code, the idea is to consider each new price as having a span of 1, and
then checking if the last value in the stack is less than or equal to the
current price. While that is the case, pop the last value from the stack and add
it's span to the current price's span. Keep doing that until a number in the
stack is greater than the current price, or the stack becomes empty. Then, push
the current price along with total span to the stack.

| Time | Space |
| ---- | ----- |
| O(n) | O(n)  |
