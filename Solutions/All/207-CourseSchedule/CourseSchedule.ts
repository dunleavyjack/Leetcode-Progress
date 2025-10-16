function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let prereqMap = new Map<number, number[]>(); // [ prereq: coursesDependentOnThisPrereq[] ]
  for (let [course, prereq] of prerequisites) {
    prereqMap.set(prereq, [...(prereqMap.get(prereq) || []), course]);
  }

  let visitedAndSafe = new Set<number>(); // Nodes we know don't have a cycle.
  let visiting = new Set<number>(); // Nodes currently being visited by DFS.

  function isCycleDFS(course: number) {
    if (visitedAndSafe.has(course)) return false; // Already visited this node and marked as safe
    if (visiting.has(course)) return true; // Cycle detected!

    // Add current course to "visiting" set and explore it's children.
    visiting.add(course);
    for (const c of prereqMap.get(course) || []) {
      const isCycle = isCycleDFS(c);
      if (isCycle) return true; // Cycle detected!
    }

    // Happy path: no cycle detected. Node is safe.
    visiting.delete(course);
    visitedAndSafe.add(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    const isCycle = isCycleDFS(i);
    if (isCycle) return false; // Cycle was detected!
  }

  return true;
}
