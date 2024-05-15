export function isArmstrongNumber(number: number | BigInt): boolean {
  if (typeof number === "number" || typeof number === "bigint") {
    // num to string
    const numberAsString = number.toString()
    if (numberAsString.length === 1) {
      return true // singles all are armstrong numbers
    } else {


            // Calculate the power (number of digits) using BigInt
      const power = BigInt(numberAsString.length);
      let sum = BigInt(0);
      
      // Iterate over each digit of the number
      for (let digitChar of numberAsString) {
        // Convert each digit character to a BigInt
        const digit = BigInt(parseInt(digitChar, 10));
        // Add the digit raised to the power of the number of digits to the sum
        sum += digit ** power;
      }
      
      // Check if the sum is equal to the original number
      return sum === BigInt(number);
    }
  } else {
    // Throw an error if the input is neither a number nor BigInt
    throw new Error('Input must be a number or BigInt');
  }
}
