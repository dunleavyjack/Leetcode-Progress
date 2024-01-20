import { TreeNode } from '../../types';

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let result = 0;

    const traverse = (root: TreeNode | null) => {
        if (!root) return;

        if (root.val <= high && root.val >= low) {
            result += root.val;
        }

        if (root.val < high) traverse(root.right);
        if (root.val > low) traverse(root.left);
    };

    traverse(root);
    return result;
}
