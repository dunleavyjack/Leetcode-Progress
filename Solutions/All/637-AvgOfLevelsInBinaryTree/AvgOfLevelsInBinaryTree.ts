import { TreeNode } from "../../../types";

function averageOfLevels(root: TreeNode | null): number[] {
  const map = new Map<number, number[]>(); // {level, number array of nums at that level}
  let result: number[] = [];

  const traverse = (node, level) => {
    if (!node) return;

    map.set(level, [...(map.get(level) || []), node.val]);

    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  };

  traverse(root, 1);
  console.log(map);

  for (const [_level, numsAtLevel] of map) {
    const avg =
      numsAtLevel.reduce((acc, curr) => acc + curr, 0) / numsAtLevel.length;

    result.push(Number(avg));
  }

  return result;
}
