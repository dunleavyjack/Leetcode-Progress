function largestInteger(num: number): number {
  const even: number[] = [];
  const odd: number[] = [];

  for (const number of String(num)) {
    const n = Number(number);
    if (isEven(n)) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);

  let result = "";
  for (const number of String(num)) {
    const n = Number(number);
    if (isEven(n)) {
      result += String(even.pop());
    } else {
      result += String(odd.pop());
    }
  }

  return Number(result);
}

function isEven(num: number) {
  return num % 2 === 0;
}
