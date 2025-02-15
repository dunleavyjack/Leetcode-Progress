class MinStack {
  minStack: number[];
  stack: number[];

  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (!this.minStack.length) {
      this.minStack.push(val);
    } else {
      const currMin = Math.min(val, this.minStack[this.minStack.length - 1]);
      this.minStack.push(currMin);
    }
  }
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
