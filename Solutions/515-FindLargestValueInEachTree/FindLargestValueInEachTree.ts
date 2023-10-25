import { TreeNode } from '../../Definitions/TreeNode/TreeNode';

function largestValues(root: TreeNode | null): number[] {
    const levelMap = new Map<number, number[]>(); // {largest val: }

    const largestValueTraversalHelper = (
        node: TreeNode | null,
        level: number,
        levelMap: Map<number, number[]>
    ) => {
        if (!node) return;

        if (node.left) {
            levelMap.set(level, [
                ...(levelMap.get(level) || []),
                node.left.val,
            ]);
            largestValueTraversalHelper(node.left, level + 1, levelMap);
        }

        if (node.right) {
            levelMap.set(level, [
                ...(levelMap.get(level) || []),
                node.right.val,
            ]);

            largestValueTraversalHelper(node.right, level + 1, levelMap);
        }
    };

    if (!root) return [];
    else levelMap.set(1, [root.val]);
    largestValueTraversalHelper(root, 2, levelMap);

    let result: number[] = [];
    for (const values of levelMap.values()) {
        const levelMax = values.length > 0 ? Math.max(...values) : 0;
        result.push(levelMax);
    }

    return result;
}
