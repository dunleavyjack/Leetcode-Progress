import { TreeNode } from "../../Types/TreeNode/TreeNode";

export function maximumAverageSubtree(root: TreeNode | null): number {
  let max = 0;

  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0];

    const [leftCount, leftSum] = dfs(node.left);
    const [rightCount, rightSum] = dfs(node.right);
    const nodeCount = leftCount + rightCount + 1;

    const sum = node.val + leftSum + rightSum;
    const avg = sum / nodeCount;
    max = Math.max(max, avg);

    return [nodeCount, sum];
  }

  dfs(root);

  return max;
}
