class Solution {
    fun isSameTree(
        p: TreeNode?,
        q: TreeNode?,
    ): Boolean {
        if (p == null && q == null) return true

        if (
            p == null ||
            q == null ||
            p.`val` != q.`val`
        ) {
            return false
        }

        val isSameLeft = isSameTree(p.left, q.left)
        val isSameRight = isSameTree(p.right, q.right)

        return isSameLeft && isSameRight
    }
}
