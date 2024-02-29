import { TreeNode } from '../../types';

function findBottomLeftValue(root: TreeNode | null): number {
    let levelMap = new Map<number, number[]>(); // {level, arrayOfNumsAtLevel}

    // Create a map of each level and each left node value
    function traverse(node: TreeNode | null, level: number) {
        if (!node) return;
        levelMap.set(level, [...(levelMap.get(level) || []), node.val]);

        node.left && traverse(node.left, level + 1);
        node.right && traverse(node.right, level + 1);
    }

    traverse(root, 0);
    return levelMap.get(levelMap.size - 1)![0];
}
