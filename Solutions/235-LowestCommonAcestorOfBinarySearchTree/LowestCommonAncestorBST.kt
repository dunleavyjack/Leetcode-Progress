class Solution {
    fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
        if(root == null) return root

        if(root.`val` > p!!.`val` && root.`val` > q!!.`val`){
            return lowestCommonAncestor(root.left, p, q)
        } else if (root.`val` < p!!.`val` && root.`val` < q!!.`val`){
            return lowestCommonAncestor(root.right, p, q)
        } else {
            return root
        }
    }
}
