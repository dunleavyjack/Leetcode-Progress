import { TreeNode } from '../../Definitions/TreeNode/TreeNode';

/**
 * * **Question**: Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * * **Solution**: Recursion. DFS. Use base function for recursion.
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // If both p and q don't exist, that part of the tree is the same
    if (!p && !q) return true;

    // Two checks here:
    // 1) Does either p *or* q not exist (unbalanced tree)
    // 2) Is the value of p and q the same (actually checking the values)
    if (!p || !q || p.val !== q.val) return false;

    // Call recursively for the left side and the right side.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
