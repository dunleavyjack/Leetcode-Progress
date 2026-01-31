import { TreeNode } from "../../../Types";

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  const queue: [TreeNode, number][] = [[root, 0]];
  while (queue.length) {
    const [node, level] = queue.shift() as [TreeNode, number];
    result[level] = [...(result[level] || []), node.val];

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  return result;
}
