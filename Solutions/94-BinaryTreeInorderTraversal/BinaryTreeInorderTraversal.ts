import { TreeNode } from '../../Definitions/TreeNode/TreeNode';

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];

    function traverseTree(root: TreeNode | null) {
        if (!root) return;

        traverseTree(root.left);
        result.push(root.val);
        traverseTree(root.right);
    }

    traverseTree(root);
    return result;
}
