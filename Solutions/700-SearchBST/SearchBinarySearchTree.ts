import { TreeNode } from '../../types';

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;

    if (root.val === val) return root;

    return searchBST(root.left, val) || searchBST(root.right, val);
}
