export class LRUCache {
  keyMap = new Map<number, number>();

  constructor(public capacity: number) {}

  get(key: number): number {
    // If no value exists in the map, return -1
    if (!this.keyMap.has(key)) return -1;

    // "Use" the key in the LRU cache, and return the value
    this.use(key);
    return this.keyMap.get(key)!;
  }

  put(key: number, value: number): void {
    // Delete previous value from map
    if (this.keyMap.has(key)) {
      this.keyMap.delete(key);
    }

    // Set the new key
    this.keyMap.set(key, value);

    // Use it
    this.use(key);

    // Remove LFU
    this.removeLFU();
  }

  use(key: number) {
    const value = this.keyMap.get(key)!;
    this.keyMap.delete(key);
    this.keyMap.set(key, value);
  }

  removeLFU() {
    if (this.keyMap.size <= this.capacity) return;

    const lfuKey = this.keyMap.keys().next().value;
    this.keyMap.delete(lfuKey);
  }
}
