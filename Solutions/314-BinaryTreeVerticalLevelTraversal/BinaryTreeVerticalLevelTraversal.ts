import { TreeNode } from "../../Types";

export function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const verticalLevelsMap = new Map<number, number[]>(); // column number, nodes in that column
  let minVerticalLevel = 0;

  const queue: [TreeNode, number][] = [[root, 0]];

  while (queue.length) {
    const [node, level] = queue.shift() as [TreeNode, number];

    verticalLevelsMap.set(level, [
      ...(verticalLevelsMap.get(level) || []),
      node.val,
    ]);
    minVerticalLevel = Math.min(minVerticalLevel, level);

    if (node.left) queue.push([node.left, level - 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  console.log(verticalLevelsMap);

  let result: number[][] = [];
  for (const [level, nodes] of verticalLevelsMap) {
    result[level - minVerticalLevel] = nodes;
  }
  return result;
}
