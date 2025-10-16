function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let prereqMap = new Map<number, number[]>(); // [ course: prereqs ]

  for (const [course, prereq] of prerequisites) {
    prereqMap.set(course, [...(prereqMap.get(course) || []), prereq]);
  }

  const courseOrder: number[] = [];

  const visitedAndSafe = new Set<number>();
  const visiting = new Set<number>();

  function isCycleDFS(course: number) {
    if (visitedAndSafe.has(course)) {
      return false;
    }

    if (visiting.has(course)) {
      return true; // Cycle detected
    }

    visiting.add(course);

    for (const c of prereqMap.get(course) || []) {
      const isCycle = isCycleDFS(c);
      if (isCycle) return false;
    }

    visiting.delete(course);
    visitedAndSafe.add(course);
    courseOrder.push(course);

    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    const isCycle = isCycleDFS(i);
    if (isCycle) return [];
  }

  return courseOrder;
}
