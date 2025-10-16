import { TreeNode } from "../../../Types";

export function goodNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, maxValue: number): number {
    if (!node) return 0;

    const isNodeGood = node.val >= maxValue;
    maxValue = Math.max(node.val, maxValue);

    const goodNodesLeft = dfs(node.left, maxValue);
    const goodNodesRight = dfs(node.right, maxValue);

    let numOfGoodNodes = goodNodesLeft + goodNodesRight;
    if (isNodeGood) numOfGoodNodes++;

    return numOfGoodNodes;
  }

  if (!root) return 0;
  return dfs(root, root.val);
}
