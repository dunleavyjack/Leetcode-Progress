# Notes: LC 12 Integer To Roman

Pretty easy once you realize the trick. Rather than creating a map of only the
provided numbers, also create one for all the "tricky" numbers as well. Tricky
meaning the ones that require taking away from the next group (i.e. 4 = "IV", 9
= "IX").

The second trick is to set the map up in decreasing order. Since TS maps
maintain their insertion order (including their order at initialization), this
allows you to iterate through all numbers from greatest to lowest.

Then, iterate through the map in decreasing order (explained above). While the
number is larger than the current integer from the map, decrement the number by
that integer amount and add it's roman value to a result string. Eventually, the
result string will be the roman number!

| Time | Space |
| ---- | ----- |
| O(1) | O(1)  |
