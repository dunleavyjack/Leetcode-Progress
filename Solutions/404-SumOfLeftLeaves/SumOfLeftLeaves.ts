import { TreeNode } from '../../Types/TreeNode/TreeNode';

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0;

    function traverse(node: TreeNode | null) {
        if (!node) return;

        if (node.left && !node.left.right && !node.left.left) {
            sum += node.left.val;
        } else {
            traverse(node.left);
        }

        traverse(node.right);
    }

    traverse(root);

    return sum;
}
