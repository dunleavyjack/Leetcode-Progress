class DLListNode {
  prev: DLListNode | null = null;
  next: DLListNode | null = null;

  constructor(
    public key: number,
    public value: number,
  ) {}
}

class LRUCache {
  cache: Map<number, DLListNode> = new Map();
  dummyLeft = new DLListNode(0, 0);
  dummyRight = new DLListNode(0, 0);

  constructor(public capacity: number) {
    this.dummyLeft.next = this.dummyRight;
    this.dummyRight.prev = this.dummyLeft;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key)!;
    this.removeNodeFromList(node);
    this.insertNodeAtEndOfList(node);

    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.removeNodeFromList(node);
    }

    const newNode = new DLListNode(key, value);
    this.cache.set(key, newNode);
    this.insertNodeAtEndOfList(newNode);

    if (this.cache.size > this.capacity) {
      const lruNode = this.dummyLeft.next!;
      this.removeNodeFromList(lruNode);
      this.cache.delete(lruNode.key);
    }
  }

  private removeNodeFromList(node: DLListNode) {
    const prevNode = node.prev!;
    const nextNode = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  private insertNodeAtEndOfList(node: DLListNode) {
    const lastRealNode = this.dummyRight.prev!;

    lastRealNode.next = node;
    this.dummyRight.prev = node;

    node.next = this.dummyRight;
    node.prev = lastRealNode;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
