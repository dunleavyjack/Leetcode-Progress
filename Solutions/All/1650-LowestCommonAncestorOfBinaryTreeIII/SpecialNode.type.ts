export class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  parent: _Node | null;

  constructor(v: number) {
    this.val = v;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
