from typing import List


class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False

        adj = [[] for _ in range(n)]
        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)

        seen = set()

        def dfs(node, parent):
            if node in seen:
                return False

            seen.add(node)
            for n in adj[node]:
                if n == parent:
                    continue
                valid = dfs(n, node)
                if not valid:
                    return False
            return True

        return dfs(0, -1) and len(seen) == n
