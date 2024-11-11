class Solution {
    val levels: MutableList<MutableList<Int>> = mutableListOf()
    
    fun levelOrder(root: TreeNode?): List<List<Int>> {
        dfs(root)
        return levels
    }

    fun dfs(node: TreeNode?, level: Int = 0){
        if(node == null) return

        if(levels.size === level) levels.add(mutableListOf())
        levels[level].add(node!!.`val`)
        
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
}
