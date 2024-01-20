import { TreeNode } from '../../types';

function isValidBST(root: TreeNode | null): boolean {
    const isValid = (
        node: TreeNode | null,
        min: number,
        max: number
    ): boolean => {
        if (!node) return true;
        if (node.val >= max || node.val <= min) return false;

        return (
            isValid(node.left, min, node.val) &&
            isValid(node.right, node.val, max)
        );
    };

    return isValid(root, -Infinity, Infinity);
}
