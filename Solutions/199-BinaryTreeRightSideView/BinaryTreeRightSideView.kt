class Solution {
    val levels: MutableList<MutableList<Int>> = mutableListOf();
    val rightMostValues: MutableList<Int> = mutableListOf();

    fun rightSideView(root: TreeNode?): List<Int> {
        dfs(root)

        for(level in levels){
            rightMostValues.add(level[level.size - 1])
        }

        return rightMostValues
    }

    fun dfs(node: TreeNode?, level: Int = 0){
        if(node == null) return

        if(levels.size == level) levels.add(mutableListOf())
        levels[level].add(node!!.`val`)

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
}

