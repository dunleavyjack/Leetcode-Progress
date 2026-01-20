from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def lowestCommonAncestor(
        self, root: TreeNode | None, p: TreeNode, q: TreeNode
    ) -> TreeNode | None:
        if root is None:
            return None

        if root == p or root == q:
            return root

        valid_left = self.lowestCommonAncestor(root.left, p, q)
        valid_right = self.lowestCommonAncestor(root.right, p, q)

        if valid_left and valid_right:
            return root
        else:
            return valid_left or valid_right
