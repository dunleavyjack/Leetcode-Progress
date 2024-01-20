import { TreeNode } from '../../types';

function maxDepth(root: TreeNode | null): number {
    return root ? 1 + Math.max(maxDepth(root.right), maxDepth(root.left)) : 0;
}
