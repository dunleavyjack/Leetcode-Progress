import { TreeNode } from '../../types';

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true;
    if (!root) return false;

    if (sameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    function sameTree(root: TreeNode | null, sub: TreeNode | null): boolean {
        if (!root && !sub) return true;
        if (root && sub && root.val === sub.val) {
            return (
                sameTree(root.left, sub.left) && sameTree(root.right, sub.right)
            );
        }
        return false;
    }
}
