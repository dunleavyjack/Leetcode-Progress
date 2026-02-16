from typing import Optional
from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return False

        if not subRoot:
            return True

        if root.val == subRoot.val and self.isSameTree(root, subRoot):
            return True

        is_left_subtree = self.isSubtree(root.left, subRoot)
        is_right_subtree = self.isSubtree(root.right, subRoot)

        return is_left_subtree or is_right_subtree

    def isSameTree(self, a, b):
        if not a and not b:
            return True
        if not a or not b or a.val != b.val:
            return False

        same_left = self.isSameTree(a.left, b.left)
        same_right = self.isSameTree(a.right, b.right)

        return same_left and same_right
