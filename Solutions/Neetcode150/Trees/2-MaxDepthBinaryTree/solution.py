class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """

        if not root:
            return 0

        max_left = self.maxDepth(root.left)
        max_right = self.maxDepth(root.right)

        return max(max_left, max_right) + 1
