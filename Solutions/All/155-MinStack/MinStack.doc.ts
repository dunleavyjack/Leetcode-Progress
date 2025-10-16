/**
 * Since each function in this problem needs to be solved in 0(1) time complexity, you can create
 *
 * a second stack that shows the current minimum at each index in the array.
 *
 * In this case, it is called `minStack`. As numbers are pushed or popped, the `minStack` is updated.
 *
 */
export class MinStack {
    /**
     * The stack of numbers.
     */
    private stack: number[];

    /*
     *  A stack that maintains the current minimum at each index in the normal stack.
     */
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * Adds a number to the stack.
     *
     * To make sure the `minStack` is updated as well, first update the stack and then check if the `minStack` is empty.
     *
     * If it is, just add the val. If not, compare val to the current minimum.
     *
     * @param val The incoming number
     */
    push(val: number): void {
        this.stack.push(val);
        this.minStack.length
            ? this.minStack.push(
                  Math.min(val, this.minStack[this.minStack.length - 1])
              )
            : this.minStack.push(val);
    }

    /**
     * Remove the last element.
     *
     * **This method needs to remove the last from teh normal stack, and the `minStack` **
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * Return the last element in the stack.
     *
     * @returns The top of the stack.
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Return the minimum element in the stack.
     *
     * In this case, it will be the last element in the `minStack`.
     *
     * @returns The minimum element in the array.
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
