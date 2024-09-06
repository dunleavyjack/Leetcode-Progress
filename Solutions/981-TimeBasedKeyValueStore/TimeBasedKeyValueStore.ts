type Store = Map<string, Array<[string, number]>>;

class TimeMap {
  store: Store;

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const values = this.store.get(key);

    // Key does not previously exist in store
    if (!values) {
      this.store.set(key, [[value, timestamp]]);
      return;
    }

    const insertionIndex = this.findInsertionIndex(values, timestamp);
    values.splice(insertionIndex, 0, [value, timestamp]);
    this.store.set(key, values);
  }

  get(key: string, timestamp: number): string {
    const values = this.store.get(key);
    if (!values) return "";

    const insertionIndex = this.findInsertionIndex(values, timestamp);
    return insertionIndex > 0 ? values[insertionIndex - 1][0] : "";
  }

  /**
   * Finds the index in a sorted array where a provided value should be inserted.
   */
  private findInsertionIndex(values: Array<[string, number]>, value: number) {
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (value < values[mid][1]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
}
