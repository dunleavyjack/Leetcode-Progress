from typing import List
from collections import defaultdict


class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        nodes_to_neightbors = defaultdict(list)

        for node, neighbor in edges:
            nodes_to_neightbors[node].append(neighbor)
            nodes_to_neightbors[neighbor].append(node)

        components = 0

        visited = set()

        def dfs(node):
            if node in visited:
                return

            visited.add(node)
            for n in nodes_to_neightbors[node]:
                dfs(n)

        for i in range(n):
            if i not in visited:
                components += 1
                dfs(i)

        return components
