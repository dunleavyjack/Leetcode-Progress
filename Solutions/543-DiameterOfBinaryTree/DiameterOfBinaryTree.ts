import { TreeNode } from '../../types';

function diameterOfBinaryTree(root: TreeNode | null): number {
    let result: number[] = [0];

    const dfs = (root) => {
        if (!root) return -1;
        const left = dfs(root.left);
        const right = dfs(root.right);

        result[0] = Math.max(result[0], 2 + left + right);

        return 1 + Math.max(left, right);
    };

    dfs(root);
    return result[0];
}
