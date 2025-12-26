export class TimeMap {
  store: Map<string, [string, number][]>; // key: [value, timestamp]

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const currValues = this.store.get(key);
    if (currValues) {
      currValues.push([value, timestamp]);
    } else {
      this.store.set(key, [[value, timestamp]]);
    }
  }

  get(key: string, timestamp: number): string {
    const currValues = this.store.get(key);
    if (!currValues) return "";

    let left = 0;
    let right = currValues.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (currValues[mid][1] <= timestamp) {
        result = currValues[mid][0];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
