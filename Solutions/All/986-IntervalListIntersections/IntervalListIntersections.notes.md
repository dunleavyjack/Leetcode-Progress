# Notes: LC 986 Interval List Intersections

This one is a little tricky to get, but easy to code. Use two pointers, one for
each list, and for as long as both pointers are less than the length of both
lists.

The idea is to grab the start and end points from each list. To find an
interval, grab **the max of the both starts** and **the min of both ends**. If
the max of both starts (which can be called `start`) is less than the min of
both ends (which can be called `end`), than in interval is found and can be
pushed to the result.

Then, check which end is less. Whichever list has the lowest end should have
their pointer be incremented.
