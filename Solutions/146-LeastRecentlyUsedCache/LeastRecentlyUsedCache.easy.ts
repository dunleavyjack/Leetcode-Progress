/**
 * This version of LRU Cache doesn't require a Doubly Linked List!
 * And still has O(1) time complexity for retrival times!
 *
 * The idea is to exploit the face that JS/TS HashMaps maintain insertion order.
 *
 * You can do this with a hashmap to map each key to it's value. The real "magic" is accessing the
 * built-in interable method stored in each set. You can do this using `.values().next().value`.
 * It's the same as accessing a value from a generator function.
 */
export class LRUCache {
  keyMap = new Map<number, number>();

  constructor(public capacity: number) {}

  get(key: number): number {
    if (!this.keyMap.has(key)) return -1;

    const value = this.keyMap.get(key)!;
    this.setMRU(key, value);

    return value;
  }

  put(key: number, value: number): void {
    this.setMRU(key, value);

    if (this.keyMap.size > this.capacity) {
      this.removeLFU();
    }
  }

  setMRU(key: number, value: number) {
    if (this.keyMap.has(key)) {
      this.keyMap.delete(key);
    }
    this.keyMap.set(key, value);
  }

  removeLFU() {
    const lfuKey = this.keyMap.keys().next().value;
    this.keyMap.delete(lfuKey);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
