import { TreeNode } from "../../../../Types/TreeNode/TreeNode";

export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null, level: number) {
    if (!node) return;

    if (result[level] === undefined) {
      result[level] = node.val;
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  dfs(root, 0);
  return result;
}
