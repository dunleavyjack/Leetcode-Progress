import { TreeNode } from '../../types';

function findMode(root: TreeNode | null): number[] {
    let freqMap = new Map<number, number>(/** {num, freq} */);
    let result: number[] = [];
    let max = -Infinity;

    function traverseTree(node: TreeNode | null) {
        if (!node) return;
        if (node.val !== null) {
            freqMap.set(node.val, (freqMap.get(node.val) || 0) + 1);
        }

        traverseTree(node.left);
        traverseTree(node.right);
    }

    traverseTree(root);

    for (const [_key, value] of freqMap) {
        max = Math.max(max, value);
    }

    for (const [key, value] of freqMap) {
        if (value === max) result.push(key);
    }

    return result;
}
