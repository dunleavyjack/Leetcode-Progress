class Solution {
    fun isBalanced(root: TreeNode?): Boolean {
        val (isTreeBalanced) = dfs(root)
        return isTreeBalanced
    }

    fun dfs(node: TreeNode?): Pair<Boolean, Int> {
        if (node == null) return Pair(true, 0)

        val (isBalancedLeft, maxHeightLeft) = dfs(node.left)
        val (isBalancedRight, maxHeightRight) = dfs(node.right)
        val isTreeBalanced =
            isBalancedLeft &&
                isBalancedRight &&
                Math.abs(maxHeightLeft - maxHeightRight) <= 1
        val maxHeight = 1 + Math.max(maxHeightLeft, maxHeightRight)

        return Pair(isTreeBalanced, maxHeight)
    }
}
