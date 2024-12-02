class Solution {
    var maxDiameter: Int = 0

    fun dfs(node: TreeNode?): Int {
        if (node == null) return 0

        val left = dfs(node?.left)
        val right = dfs(node?.right)
        val currentDiameter = left + right

        maxDiameter = Math.max(maxDiameter, currentDiameter)
        return Math.max(left, right) + 1
    }

    fun diameterOfBinaryTree(root: TreeNode?): Int {
        dfs(root)
        return maxDiameter
    }
}
