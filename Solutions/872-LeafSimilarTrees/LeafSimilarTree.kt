class Solution {
    fun leafSimilar(root1: TreeNode?, root2: TreeNode?): Boolean {
        fun collectLeaves(root: TreeNode?): List<Int>{
            val leaves: MutableList<Int> = mutableListOf()

            fun dfs(node: TreeNode?){
                if(node == null) return;
                if(node.left == null && node.right == null){
                    leaves.add(node.`val`)
                }

                dfs(node.left)
                dfs(node.right)
            }

            dfs(root)
            return leaves
        }

        val leaves1 = collectLeaves(root1)
        val leaves2 = collectLeaves(root2)

        if(leaves1.size != leaves2.size) return false
        for((i, leaf) in leaves1.withIndex()){
            if(leaf != leaves2[i]) return false
        }

        return true
    }
}
