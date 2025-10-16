import { Node } from "../../../types";

function preorder(root: Node | null): number[] {
  const addVal = (node: Node | null, res: number[]): number[] | undefined => {
    if (node === null) return;

    res.push(node.val);
    node.children.forEach((child) => addVal(child, res));
  };

  const result: number[] = [];

  if (!root) return result;

  addVal(root, result);

  return result;
}
