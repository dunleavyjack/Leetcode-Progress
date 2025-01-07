# Notes: LC 1762 Buildings With An Ocean View

Super easy medium. I first thought to use a monotonic stack, but actually it is
simpler to just track the max value from the right side to the left.

One tip: if you use `[newValue, ...oldValues]` instead of
`oldValues.unshift(newValue)` you will get a time limit exception! I didn't
realize the performance difference was so significant.
