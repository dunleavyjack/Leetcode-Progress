function addStrings(num1: string, num2: string): string {
  let num1Pointer = num1.length - 1;
  let num2Pointer = num2.length - 1;

  let result = "";
  let carry = 0;
  while (num1Pointer >= 0 || num2Pointer >= 0 || carry) {
    const num1Num = num1[num1Pointer] || "0";
    const num2Num = num2[num2Pointer] || "0";

    const sum = convertCharToNum(num1Num) + convertCharToNum(num2Num) + carry;
    carry = 0;

    if (sum >= 10) {
      carry = 1;
      result = String(sum % 10) + result;
    } else {
      result = String(sum) + result;
    }

    num1Pointer--;
    num2Pointer--;
  }

  return result;
}

function convertCharToNum(char: string) {
  return char.charCodeAt(0) - "0".charCodeAt(0);
}
