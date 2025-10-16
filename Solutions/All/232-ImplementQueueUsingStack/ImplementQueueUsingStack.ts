class MyQueue {
    private stack: number[] = [];

    constructor() {}

    push(x: number): void {
        this.stack = [...this.stack, x];
    }

    pop(): number {
        return this.stack.shift() ?? -1;
    }

    peek(): number {
        return this.stack[0];
    }

    empty(): boolean {
        return !this.stack.length;
    }
}
