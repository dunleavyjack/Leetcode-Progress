# Notes: LC 162 Find Peak Element

Really interesting one. Two key points:

1. The desired time complexity is 0(log n), so all nodes cannot be visited.
   Instead, this is actually a binary search problem.

2. You can return **any** peak. Not just the max peak.

The solution is reached by using binary search to find a mid element.
Then,checking if that mid element is a peak by comparing it to the element to
its left and the element to its right. If it is a peak element, return it.

Otherwise, and here is the trick, move to whatever side has the greater number.
For example, if the number on the left is 4, the middle number is 6, and the
right number is 8. Move to the right. This is because essentially half of a peak
element is already found. Although the right number might not be the exact peak
element that gets found, for it to not be a peak element means that a number
even greater is to it's right. That number might become the peak element, etc.
It's guaranteed, because eventually the end of the array will be reached and in
that case the right most element will become `-Infinity`.
