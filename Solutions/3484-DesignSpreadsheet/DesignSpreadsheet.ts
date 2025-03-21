class Spreadsheet {
  cells: Map<string, number>;

  // Note: `rows` is not actually needed to solve this problem! (added an underscore prefix).
  constructor(_rows: number) {
    this.cells = new Map<string, number>();
  }

  setCell(cell: string, value: number): void {
    this.cells.set(cell, value);
  }

  resetCell(cell: string): void {
    this.cells.set(cell, 0);
  }

  getValue(formula: string): number {
    const expression = formula.slice(1);
    let [x, y] = expression.split("+");
    let value = 0;

    // Check if first value is a stringified integer, or a cell name
    if (this.isInteger(x)) {
      value += Number(x);
    } else {
      value += this.cells.get(x) || 0;
    }

    // Check if second value is a stringified integer, or a cell name
    if (this.isInteger(y)) {
      value += Number(y);
    } else {
      value += this.cells.get(y) || 0;
    }

    return value;
  }

  isInteger(char: string) {
    return !isNaN(Number(char));
  }
}
