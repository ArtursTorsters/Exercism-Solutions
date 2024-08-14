

export function square(num) {


  // Math.pow(7, 2); // 49    7 * 7

  // so 2 * square minus 1
  // return Math.pow(2, square - 1);


  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return 2n ** BigInt(num - 1);
}

export function total() {
  return 2n ** 64n - 1n;
}