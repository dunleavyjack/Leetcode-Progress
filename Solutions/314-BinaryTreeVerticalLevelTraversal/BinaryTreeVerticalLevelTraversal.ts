import { TreeNode } from "../../Types";

export function verticalOrder(root: TreeNode | null): number[][] {
  const verticalLevels = new Map<number, number[]>(); // {level, valuesAtLevel }
  let minLevel = 0;

  function bfs(root: TreeNode | null) {
    if (!root) return;

    const queue: [TreeNode, number][] = [[root, 0]]; // [node, level]

    while (queue.length) {
      const [node, level] = queue.shift() as [TreeNode, number];

      minLevel = Math.min(minLevel, level);
      verticalLevels.set(level, [
        ...(verticalLevels.get(level) || []),
        node.val,
      ]);

      if (node.left) queue.push([node.left, level - 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }
  }

  bfs(root);

  let result: number[][] = [];

  for (const [level, valuesAtLevel] of verticalLevels) {
    result[level + Math.abs(minLevel)] = valuesAtLevel;
  }

  return result;
}
