import Definitions.TreeNode.TreeNode;

class Solution {
    public int maxDepth(TreeNode root) {
        return root != null ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
    }
}
