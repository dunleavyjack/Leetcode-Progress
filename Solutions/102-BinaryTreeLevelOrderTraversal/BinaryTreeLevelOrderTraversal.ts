import { TreeNode } from '../../Definitions/TreeNode/TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
    const levelMap = new Map<number, number[]>();

    const levelTraversalHelper = (
        node: TreeNode | null,
        levelMap: Map<number, number[]>,
        level: number
    ) => {
        if (!node) return;

        if (node.left) {
            levelMap.set(level, [
                ...(levelMap.get(level) || []),
                node.left.val,
            ]);
            levelTraversalHelper(node.left, levelMap, level + 1);
        }

        if (node.right) {
            levelMap.set(level, [
                ...(levelMap.get(level) || []),
                node.right.val,
            ]);
            levelTraversalHelper(node.right, levelMap, level + 1);
        }
    };

    if (!root) return [];
    else levelMap.set(1, [root.val]);

    levelTraversalHelper(root, levelMap, 2);

    return Array.from(levelMap.values());
}
