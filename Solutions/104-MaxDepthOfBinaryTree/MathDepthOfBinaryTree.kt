class Solution {
    fun maxDepth(root: TreeNode?): Int {
        if(root == null) return 0

        val left = maxDepth(root.left)
        val right = maxDepth(root.right)

        return Math.max(left, right) + 1
    }
}
