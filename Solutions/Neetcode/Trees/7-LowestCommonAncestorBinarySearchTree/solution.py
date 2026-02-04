from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def lowestCommonAncestor(
        self, root: None | TreeNode, p: "TreeNode", q: "TreeNode" | None
    ) -> "TreeNode":
        if not root:
            return None

        if p.val > root.val and q.val > root.val:
            return self.lowestCommonAncestor(root.right, p, q)

        if p.val < root.val and q.val < root.val:
            return self.lowestCommonAncestor(root.left, p, q)

        return root
