import { TreeNode } from '../../types';

export function isSymmetric(root: TreeNode | null): boolean {
    return isSymmetricNodes(root!.left, root!.right);
}

function isSymmetricNodes(
    left: TreeNode | null,
    right: TreeNode | null
): boolean {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    return (
        left.val === right.val &&
        isSymmetricNodes(left.left, right.right) &&
        isSymmetricNodes(left.right, right.left)
    );
}
