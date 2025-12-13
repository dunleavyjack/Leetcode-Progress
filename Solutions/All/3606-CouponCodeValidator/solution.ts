function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[],
): string[] {
  const electronics: string[] = [];
  const grocery: string[] = [];
  const pharmacy: string[] = [];
  const restaurant: string[] = [];

  const buisnessLines = new Set([
    "electronics",
    "grocery",
    "pharmacy",
    "restaurant",
  ]);

  code.forEach((couponCode, i) => {
    const couponBusinessLine = businessLine[i];
    const couponIsActive = isActive[i];

    if (!couponIsActive) return;

    const isValidCode = getIsValidCode(couponCode);
    const isValidBusinessLine = buisnessLines.has(couponBusinessLine);

    if (isValidCode && isValidBusinessLine) {
      switch (couponBusinessLine) {
        case "electronics":
          electronics.push(couponCode);
          break;
        case "grocery":
          grocery.push(couponCode);
          break;
        case "pharmacy":
          pharmacy.push(couponCode);
          break;
        case "restaurant":
          restaurant.push(couponCode);
          break;
      }
    }
  });

  return [
    ...electronics.sort(),
    ...grocery.sort(),
    ...pharmacy.sort(),
    ...restaurant.sort(),
  ];
}

function getIsValidCode(code: string): boolean {
  if (!code) return false;

  const aCharCode = "a".charCodeAt(0);
  const zcharCode = "z".charCodeAt(0);

  const upperACharCode = "A".charCodeAt(0);
  const upperZCharCode = "Z".charCodeAt(0);

  for (let char of code) {
    const charCode = char.charCodeAt(0);

    const isValid =
      (aCharCode <= charCode && charCode <= zcharCode) ||
      (upperACharCode <= charCode && charCode <= upperZCharCode) ||
      (0 <= Number(char) && Number(char) <= 9) ||
      char === "_";
    if (!isValid) return false;
  }
  return true;
}
