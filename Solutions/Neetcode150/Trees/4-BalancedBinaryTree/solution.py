class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: Optional[TreeNode]
        :type q: Optional[TreeNode]
        :rtype: bool
        """
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False

        is_same_left = self.isSameTree(p.left, q.left)
        is_same_right = self.isSameTree(p.right, q.right)

        return is_same_left and is_same_right
