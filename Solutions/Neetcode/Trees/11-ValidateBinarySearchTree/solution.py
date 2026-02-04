from typing import Optional
from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.isValid(root, float("-inf"), float("inf"))

    def isValid(self, node, min_val, max_val):
        if not node:
            return True

        if not min_val < node.val < max_val:
            return False

        valid_left = self.isValid(node.left, min_val, node.val)
        valid_right = self.isValid(node.right, node.val, max_val)

        return valid_left and valid_right
