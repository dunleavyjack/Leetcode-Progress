class DoublyLinkedListNode {
  key: number;
  val: number;

  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;

    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  cache: Map<number, DoublyLinkedListNode>; // { key, node }
  capacity: number;

  left: DoublyLinkedListNode;
  right: DoublyLinkedListNode;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;

    this.left = new DoublyLinkedListNode(0, 0);
    this.right = new DoublyLinkedListNode(0, 0);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.removeNode(node);
      this.insertNodeAtEnd(node);

      return node.val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.removeNode(this.cache.get(key)!);
    }

    const newNode = new DoublyLinkedListNode(key, value);
    this.cache.set(key, newNode);
    this.insertNodeAtEnd(newNode);

    if (this.cache.size > this.capacity) {
      const leastRecentlyUsed = this.left.next!;
      this.removeNode(leastRecentlyUsed);
      this.cache.delete(leastRecentlyUsed.key);
    }
  }

  private insertNodeAtEnd(node: DoublyLinkedListNode) {
    const [prevNode, rightNode] = [this.right.prev!, this.right];
    prevNode.next = node;
    node.prev = prevNode;

    rightNode.prev = node;
    node.next = rightNode;
  }

  private removeNode(node: DoublyLinkedListNode) {
    const [prevNode, nextNode] = [node.prev!, node.next!];
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
