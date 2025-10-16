import { TreeNode } from "../../../Types/TreeNode/TreeNode";

export function rob(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0];

    const [leftWithCurrent, leftWithoutCurrent] = dfs(node.left);
    const [rightWithCurrent, rightWithoutCurrent] = dfs(node.right);

    const withCurrent = node.val + leftWithoutCurrent + rightWithoutCurrent;
    const withoutCurrent =
      Math.max(leftWithCurrent, leftWithoutCurrent) +
      Math.max(rightWithCurrent, rightWithoutCurrent);

    return [withCurrent, withoutCurrent];
  }

  const [withCurrent, withoutCurrent] = dfs(root);
  return Math.max(withCurrent, withoutCurrent);
}
