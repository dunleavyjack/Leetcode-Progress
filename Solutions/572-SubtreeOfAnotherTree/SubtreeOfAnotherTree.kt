class Solution {
    fun isSubtree(root: TreeNode?, subRoot: TreeNode?): Boolean {
        if(subRoot == null) return true;
        if(root == null) return false;

        if(root.`val` == subRoot.`val` && isSameTree(root, subRoot)){
            return true
        } else {
            return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
        }
    }

    fun isSameTree(rootOne: TreeNode?, rootTwo: TreeNode?): Boolean {
        if(rootOne == null && rootTwo == null) return true;
        if(
            rootOne == null ||
            rootTwo == null ||
            rootOne.`val` != rootTwo.`val`
        ) return false;

        return isSameTree(rootOne.left, rootTwo.left) && isSameTree(rootOne.right, rootTwo.right)
    }
}

