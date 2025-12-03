# Solution

For this one, the main thing to realize is that in a rotated sorted array, at
least one side will always remain sorted. Since you are looking for the minimum
value, at each stage you'll need to decide which side to investigate.

There's a trick. If the number in the middle of a segment is less than the
number on the right, then it means the right side is sorted. But, the middle
value could still be the minimum, so it should still be considered. Otherwise,
move the left pointer one past the middle.

| Time     | Space |
| -------- | ----- |
| 0(log n) | 0(1)  |
