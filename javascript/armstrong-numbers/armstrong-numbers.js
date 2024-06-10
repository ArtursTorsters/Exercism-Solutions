//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
const numberAsString  = num.toString()
if(numberAsString.length === 1) {
  return true
}else if (numberAsString.length === 2) {
  return false
}

// number split(' ') 
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
return sum === BigInt(numberAsString);
}


