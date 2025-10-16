# Notes: LC 210 Course Schedule II

Similar to LC207 Course Schedule. You are looking for a cycle, and need to use a
DFS. The only difference is that when a node is marked "safe", you just need to
add it to a result array.

Key tip: When initially sorting the courses and their prereqs, the map should be
[ course: coursePrereqs ]. This will give you the correct order when you return the
result.

| Time     | Space    |
| -------- | -------- |
| O(v + e) | O(v + e) |
