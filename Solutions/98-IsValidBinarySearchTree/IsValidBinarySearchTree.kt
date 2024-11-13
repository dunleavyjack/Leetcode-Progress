class Solution {
    fun isValidBST(root: TreeNode?): Boolean {
        return dfs(root, null, null)   
    }
    
    fun dfs(node: TreeNode?, min: Int?, max: Int?): Boolean {
        if(node == null) return true;

        if((min != null && node.`val` <= min) || (max != null && node.`val` >= max)) return false;

        val isLeftValid = dfs(node.left, min, node.`val`)
        val isRightValid = dfs(node.right, node.`val`, max)
        return isLeftValid && isRightValid
    }
}
