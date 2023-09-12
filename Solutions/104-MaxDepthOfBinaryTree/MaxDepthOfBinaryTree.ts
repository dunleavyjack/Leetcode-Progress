import { TreeNode } from '../../Definitions/TreeNode/TreeNode';

function maxDepth(root: TreeNode | null): number {
    return root ? 1 + Math.max(maxDepth(root.right), maxDepth(root.left)) : 0;
}
