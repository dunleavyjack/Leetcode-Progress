# Notes: LC 1233 Remove Subfolders From Filesystem

Sorted the list of folders lexicographically to ensure that parent folders come
before their sub-folders. This guarantees that any sub-folder (e.g., /a/b) will
follow directly after its parent (e.g., /a) in the sorted list.

Used a single pass through the sorted list, maintaining a result array of
top-level folders. For each path, checked whether it starts with the last added
folder plus a /. If it does, it’s a sub-folder and should be skipped. Otherwise,
it's a new top-level folder and gets added to the result.

| Time        | Space |
| ----------- | ----- |
| O(n log n ) | O(n)  |
