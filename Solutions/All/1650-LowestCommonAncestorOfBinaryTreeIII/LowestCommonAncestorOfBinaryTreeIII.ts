import { _Node } from "./SpecialNode.type";

export function lowestCommonAncestor(
  p: _Node | null,
  q: _Node | null,
): _Node | null {
  let pointerOne = p;
  let pointerTwo = q;

  while (pointerOne !== pointerTwo) {
    pointerOne = pointerOne?.parent || q;
    pointerTwo = pointerTwo?.parent || p;
  }

  return pointerOne;
}
