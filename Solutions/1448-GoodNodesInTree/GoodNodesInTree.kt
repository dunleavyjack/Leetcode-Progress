class Solution {
    fun goodNodes(root: TreeNode?): Int {
        if (root == null) return 0
        return dfs(root, root.`val`)
    }

    fun dfs(
        node: TreeNode?,
        maxValueInPath: Int,
    ): Int {
        if (node == null) return 0

        val isNodeGood = node.`val` >= maxValueInPath
        val newMaxValueInPath = Math.max(node.`val`, maxValueInPath)

        val goodNodesLeft = dfs(node.left, newMaxValueInPath)
        val goodNodesRight = dfs(node.right, newMaxValueInPath)

        var numOfGoodNodes = goodNodesLeft + goodNodesRight
        if (isNodeGood) numOfGoodNodes++

        return numOfGoodNodes
    }
}
