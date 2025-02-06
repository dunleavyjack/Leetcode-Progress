# Notes: LC 1726 Tuple With Same Product

Not going to lie, had to lookup the combinations equation for calculating the
potential number of arrangements for the tuple pairs. Got to do some interesting
reading on how it works.

Other than that, the idea is to check all possible combinations of numbers,
storing the product in a hash map along with the amount of pairs who reach that
product. Then, iterate through the values of the hash map calculating the
potential combinations of numbers within each of the pairs. The equation is:

```typescript
const combinations = ((numberOfPairs * (numberOfPairs - 1)) / 2) * 8;
```

Since all combinations need to be evaluated, the time complexity cannot be
faster than 0(n^2).

| Time   | Space  |
| ------ | ------ |
| O(n^2) | O(n^2) |
