import { TreeNode } from '../../Definitions';

function getTargetCopy(
    original: TreeNode | null,
    cloned: TreeNode | null,
    target: TreeNode | null
): TreeNode | null {
    if (!original) return;
    if (original.val === target.val) return cloned;

    const leftResult = getTargetCopy(original.left, cloned.left, target);
    if (leftResult) return leftResult;

    const rightResult = getTargetCopy(original.right, cloned.right, target);
    if (rightResult) return rightResult;

    return null;
}
