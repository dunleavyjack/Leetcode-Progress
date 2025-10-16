class DoublyLinkedListNode {
  prev: DoublyLinkedListNode | null = null;
  next: DoublyLinkedListNode | null = null;

  constructor(public value: number) {}
}

class DoublyLinkedList {
  cache: Map<number, DoublyLinkedListNode> = new Map();
  dummyLeft = new DoublyLinkedListNode(-1);
  dummyRight = new DoublyLinkedListNode(-1);

  constructor() {
    this.dummyLeft.next = this.dummyRight;
    this.dummyRight.prev = this.dummyLeft;
  }

  public length() {
    return this.cache.size;
  }

  public pushRight(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    const lastRealNode = this.dummyRight.prev!;

    lastRealNode.next = newNode;
    newNode.prev = lastRealNode;

    newNode.next = this.dummyRight;
    this.dummyRight.prev = newNode;

    this.cache.set(value, newNode);
  }

  public pop(value: number) {
    if (this.cache.has(value)) {
      const node = this.cache.get(value)!;
      this.removeNode(node);
    }
  }

  public removeLeft(): number {
    const leftNode = this.dummyLeft.next!;
    if (leftNode === this.dummyRight) return -1;

    this.pop(leftNode.value);
    return leftNode.value;
  }

  public update(value: number) {
    this.pop(value);
    this.pushRight(value);
  }

  private removeNode(node: DoublyLinkedListNode) {
    if (!node || node === this.dummyLeft || node === this.dummyRight) return;

    const prevNode = node.prev!;
    const nextNode = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.cache.delete(node.value);
  }
}

class LFUCache {
  lfuCount = 0;
  valueMap: Map<number, number> = new Map(); // key -> value
  countMap: Map<number, number> = new Map(); // key -> count
  listMap: Map<number, DoublyLinkedList> = new Map(); // count -> DLL

  constructor(public capacity: number) {}

  private counter(key: number) {
    const count = this.countMap.get(key)!;
    this.countMap.set(key, count + 1);

    this.listMap.get(count)!.pop(key);

    if (!this.listMap.has(count + 1)) {
      this.listMap.set(count + 1, new DoublyLinkedList());
    }

    this.listMap.get(count + 1)!.pushRight(key);

    if (count === this.lfuCount && this.listMap.get(count)!.length() === 0) {
      this.lfuCount += 1;
    }
  }

  get(key: number): number {
    if (!this.valueMap.has(key)) return -1;

    this.counter(key);
    return this.valueMap.get(key)!;
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) return;

    if (this.valueMap.has(key)) {
      this.valueMap.set(key, value);
      this.counter(key);
      return;
    }

    if (this.valueMap.size === this.capacity) {
      const evictKey = this.listMap.get(this.lfuCount)!.removeLeft();
      this.valueMap.delete(evictKey);
      this.countMap.delete(evictKey);
    }

    this.valueMap.set(key, value);
    this.countMap.set(key, 1);

    if (!this.listMap.has(1)) {
      this.listMap.set(1, new DoublyLinkedList());
    }

    this.listMap.get(1)!.pushRight(key);
    this.lfuCount = 1;
  }
}
