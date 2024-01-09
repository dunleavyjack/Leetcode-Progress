import { TreeNode } from '../../Definitions';

function sumEvenGrandparent(root: TreeNode | null): number {
    let result = 0;

    const traverse = (
        node: TreeNode | null,
        parent: TreeNode | null,
        grandparent: TreeNode | null
    ) => {
        if (!node) return;
        if (grandparent && grandparent.val % 2 === 0) result += node.val;

        traverse(node.left, node, parent);
        traverse(node.right, node, parent);
    };

    traverse(root, null, null);

    return result;
}
