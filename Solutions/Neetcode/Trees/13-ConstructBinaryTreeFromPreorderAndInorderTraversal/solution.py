from typing import List, Optional
from Types.TreeNode.TreeNode import TreeNode


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None

        root = TreeNode(preorder[0])
        left_size = inorder.index(preorder[0])

        root.left = self.buildTree(preorder[1 : left_size + 1], inorder[:left_size])
        root.right = self.buildTree(preorder[left_size + 1 :], inorder[left_size + 1 :])

        return root
