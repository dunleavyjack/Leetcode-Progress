from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        # Use the first index of an array to store root so it can be accessed in the dfs
        res = [root.val]

        def dfs(node):
            # Base case: return 0 when end of leaf is reached
            if not node:
                return 0

            # Get the max from both the left and right side.
            # But, if the max is negative "drop" it by replacing with 0.
            left_max = max(0, dfs(node.left))
            right_max = max(0, dfs(node.right))

            # Set the result to be the max of the current result vs the **combined** sum of curr, left, and right
            # Imagine that this could be the root node
            res[0] = max(res[0], node.val + left_max + right_max)

            # Don't return the combined sum, return the best path so far
            return node.val + max(left_max, right_max)

        dfs(root)

        return res[0]
