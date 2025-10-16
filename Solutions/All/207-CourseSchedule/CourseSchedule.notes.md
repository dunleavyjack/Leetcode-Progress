# Notes: LC 207 Course Schedule

This question requires DFS and "topological sort" to detect a cycle in the
courses and their prerequisites.

The idea is to first populate a hash map with each prerequisite as the key and
an array of the courses that require that prerequisite as the value.

Then, iterating through each course, call a dfs function that checks for cycles.
This is done using two sets: one of "visited" nodes that were previously
confirmed to not have a cycle and another that contains nodes currently being
explored.

In the dfs function, if the current node was already visited, we can safely
return false since that node was previously confirmed as "safe". But, if the
node exists in the "visiting" set, then a cycle is detected and "true" should be
returned.

After checking those two conditions, the current node should be added to the
visiting set, and the dfs function should be called on all courses that depend
on that prerequisite. If a cycle is detected in any of those child courses,
return true.

If, no cycle is found in the child courses, you can delete the current node from
the visiting set and add it to the "visited and safe" nodes. Finally, return
false to show that no cycle was detected.

Tip: I didn't realize it at first, but the description explains that the courses
will always start at 0 and go until `numCourses - 1` is reached.

| Time     | Space    |
| -------- | -------- |
| O(v + e) | O(v + e) |
