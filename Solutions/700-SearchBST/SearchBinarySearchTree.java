import Types.TreeNode.*;

class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null)
            return null;

        if (root.val == val)
            return root;

        TreeNode searchRight = searchBST(root.right, val);
        TreeNode searchLeft = searchBST(root.left, val);

        return searchRight == null ? searchLeft : searchRight;
    }
}