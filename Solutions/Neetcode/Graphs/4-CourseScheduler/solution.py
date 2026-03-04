from collections import defaultdict
from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        prereq_to_courses = defaultdict(list)  # { prereq: course[] }

        for course, prereq in prerequisites:
            prereq_to_courses[prereq].append(course)

        seen, cycle = set(), set()

        def dfs(course):
            if course in seen:
                return True
            if course in cycle:
                return False

            cycle.add(course)
            for c in prereq_to_courses[course]:
                valid = dfs(c)
                if not valid:
                    return False

            cycle.remove(course)
            seen.add(course)

            return True

        for i in range(numCourses):
            found = dfs(i)
            if not found:
                return False

        return True
