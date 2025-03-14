# Notes: LC 875 Koko Eating Bananas

This one always confuses me at first, because I don't think to use binary
search. But, that's the idea!

The trick is to not think about finding a "perfect mathematical" solution.
Instead, you want to consider all possible solutions between `1` (eating one
banana per hour), and `h` (the total amount of time before the zoo keeper
returns).

Once you consider the problem this way, binary search becomes clear. Perform
binary search like usual, except instead of just using the `mid` element to
check for a target, use `mid` to calculate the speed. This is done by iterating
through each `pile` in `piles`, and using `Math.ceil` (in TypeScript), because
Koko will not continue to the next pile if she eats all the bananas in a single
pile.
