import { TreeNode } from '../../Types/TreeNode/TreeNode';

function addOneRow(
    root: TreeNode | null,
    val: number,
    depth: number
): TreeNode | null {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    function traverse(node: TreeNode | null, currentLevel = 1) {
        // Base case for recursion
        if (!node) return;

        if (currentLevel === depth - 1) {
            const newLeftNode = new TreeNode(val);
            const newRightNode = new TreeNode(val);

            const tempLeftNode = node?.left;
            const tempRightNode = node?.right;

            node.left = newLeftNode;
            newLeftNode.left = tempLeftNode;

            node.right = newRightNode;
            newRightNode.right = tempRightNode;

            traverse(newLeftNode.left, currentLevel + 2);
            traverse(newRightNode.right, currentLevel + 2);
        } else {
            node.left && traverse(node.left, currentLevel + 1);
            node.right && traverse(node.right, currentLevel + 1);
        }
    }

    traverse(root);

    return root;
}
