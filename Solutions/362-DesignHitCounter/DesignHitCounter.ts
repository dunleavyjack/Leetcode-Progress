class HitCounter {
  private queue: [number, number][]; // [ timestamp, number ]
  private totalHits: number;

  constructor() {
    this.queue = [];
    this.totalHits = 0;
  }

  hit(timestamp: number): void {
    const last = this.queue[this.queue.length - 1];

    if (last && timestamp === last[0]) {
      this.queue[this.queue.length - 1][1]++;
    } else {
      this.queue.push([timestamp, 1]);
    }

    this.totalHits++;
  }

  getHits(timestamp: number): number {
    // Remove everything up until the
    const windowStart = timestamp - 300;

    while (this.queue.length && this.queue[0][0] <= windowStart) {
      this.totalHits -= this.queue[0][1];
      this.queue.shift();
    }

    return this.totalHits;
  }
}
