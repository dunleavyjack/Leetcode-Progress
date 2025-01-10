class MovingAverage {
  size: number;
  sum: number;
  queue: number[];

  constructor(size: number) {
    this.size = size;
    this.sum = 0;
    this.queue = [];
  }

  next(val: number): number {
    if (this.queue.length === this.size) {
      const firstInQueue = this.queue.shift() || 0;
      this.sum -= firstInQueue;
    }
    this.queue.push(val);
    this.sum += val;

    return this.sum / this.queue.length;
  }
}
