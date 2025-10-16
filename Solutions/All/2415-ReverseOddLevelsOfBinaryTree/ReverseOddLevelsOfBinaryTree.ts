import { TreeNode } from "../../../Types";

export function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const levels: number[][] = [];

  function dfs(node: TreeNode | null, level: number) {
    if (!node) return null;

    if (!levels[level]) levels.push([]);
    console.log(`pushing node: ${node.val}`);
    levels[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  function reverseLevels(node: TreeNode | null, level: number) {
    if (!node) return null;

    if (level % 2 !== 0) {
      const val = levels[level].pop() as number;
      node.val = val;
    }

    reverseLevels(node.left, level + 1);
    reverseLevels(node.right, level + 1);

    return node;
  }

  dfs(root, 0);

  return reverseLevels(root, 0);
}
