import { _Node } from "./NodeWithNeighbors.type";

export function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const copiedNodes = new Map<_Node, _Node>();

  function dfs(node: _Node): _Node {
    // If a copy already exists in the map, return it
    if (copiedNodes.has(node)) {
      return copiedNodes.get(node) as _Node;
    }

    // Otherwise, create a copy and add it to the map
    const copiedNode = new _Node(node.val);
    copiedNodes.set(node, copiedNode);

    // Recursively copy all neighbors
    for (const n of node.neighbors) {
      copiedNode.neighbors.push(dfs(n));
    }

    // Always return the copied node
    return copiedNode;
  }

  return dfs(node);
}
