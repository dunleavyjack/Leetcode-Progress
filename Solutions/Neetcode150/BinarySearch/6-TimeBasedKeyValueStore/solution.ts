class TimeMap {
  keyMap: Map<string, [number, string][]>; // { key: [timestamp, key] }
  constructor() {
    this.keyMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const keys = this.keyMap.get(key);
    if (!keys) {
      this.keyMap.set(key, [[timestamp, value]]);
      return;
    } else {
      keys.push([timestamp, value]);
    }
  }

  get(key: string, timestamp: number): string {
    const keys = this.keyMap.get(key);
    if (!keys) return "";

    let left = 0;
    let right = keys.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (timestamp < keys[mid][0]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (left === 0) return "";
    return keys[left - 1][1];
  }
}
