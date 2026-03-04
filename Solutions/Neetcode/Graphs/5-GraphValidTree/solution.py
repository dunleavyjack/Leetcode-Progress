from typing import List


class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) > (n - 1):
            return False

        neighbors = [[] for _ in range(n)]

        for node, neighbor in edges:
            neighbors[node].append(neighbor)
            neighbors[neighbor].append(node)

        visit = set()

        def dfs(node, parent):
            if node in visit:
                return False

            visit.add(node)
            for n in neighbors[node]:
                if n == parent:
                    continue
                if not dfs(n, node):
                    return False
            return True

        return dfs(0, -1) and len(visit) == n
