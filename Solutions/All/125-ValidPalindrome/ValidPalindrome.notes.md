# Notes

For this one, the hardest part is actually just remembering the regex for
removing all alphanumeric characters. Once you've done that, the rest of the
question is simple: two pointers, once at each end. Move them closer together
checking to see if the values at each pointer are not the same. If that is the
case, return `false`. Otherwise, return `true` as a default.

| Time | Space |
| ---- | ----- |
| O(n) | O(1)  |
