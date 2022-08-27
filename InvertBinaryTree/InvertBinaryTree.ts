/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    // If binary tree is empty, return the empty tree
    if (!root) {
        return null;
    }

    // Make a copy of the right node
    const rightCopy: TreeNode | null = root.right;

    // Swap right and left
    root.right = root.left;
    root.left = rightCopy;

    // Use recursion
    invertTree(root.right);
    invertTree(root.left);

    // Return new root
    return root;
}
