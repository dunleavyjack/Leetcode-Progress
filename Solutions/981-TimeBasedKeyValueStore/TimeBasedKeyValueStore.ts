class TimeMap {
  map: Map<string, [number, string][]>; // { Key: [time, value] }

  constructor() {
    this.map = new Map<string, [number, string][]>();
  }

  set(key: string, value: string, timestamp: number): void {
    const values = this.map.get(key) || [];
    values.push([timestamp, value]);
    this.map.set(key, values);
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key) || [];
    const targetIndex = this.findTargetIndex(values, timestamp);

    if (targetIndex >= 0) {
      return values[targetIndex][1];
    } else {
      return "";
    }
  }

  private findTargetIndex(
    values: [number, string][],
    timestamp: number,
  ): number {
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [currTimestamp] = values[mid];

      if (timestamp < currTimestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // Return one minus the left pointer (the index before!)
    return left - 1;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
