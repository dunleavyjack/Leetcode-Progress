export class StockSpanner {
  stack: [number, number][]; // [price, span];

  constructor() {
    // Initialize an empty stack (will be monotonicaly decreasing)
    this.stack = [];
  }

  next(price: number): number {
    // Each price has a span of at least one
    let span = 1;

    // Instead of pushing all prices to the stack, check if the last value in the stack is less than the price.
    // If so, pop it and add it's span to the current span. Keep going until a greater price than the current price is reached.
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()![1];
    }

    // Always push to the stack.
    this.stack.push([price, span]);

    return span;
  }
}
