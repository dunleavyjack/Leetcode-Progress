import { _Node } from "./NodeWithNeighbors.type";

export function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const copiedNodes = new Map<_Node, _Node>();

  function copyNodesDFS(node: _Node | null) {
    if (!node || copiedNodes.has(node)) return;

    const copiedNode = new _Node(node.val);
    copiedNodes.set(node, copiedNode);

    for (const n of node.neighbors) {
      copyNodesDFS(n);
    }
  }

  function setNeighborsForCopiedNodes(node: _Node | null) {
    if (
      !node ||
      (copiedNodes.has(node) && copiedNodes.get(node)!.neighbors.length > 0)
    )
      return;

    const copiedNode = copiedNodes.get(node);
    for (const n of node.neighbors) {
      const copiedNeighbor = copiedNodes.get(n) as _Node;
      copiedNode!.neighbors.push(copiedNeighbor);
      setNeighborsForCopiedNodes(n);
    }
  }

  copyNodesDFS(node);
  setNeighborsForCopiedNodes(node);

  return copiedNodes.get(node) as _Node;
}
