

export const valid = (string) => {
console.log(string)

let zeroWithSpace = string.trim()
if(zeroWithSpace.length === 1 || 0 ) {
  return false
}
string = string.replace(/\s+/g, '');
  
// Convert the string to an array of digits
let digits = string.split('').map(Number);

// Reverse the array to process from right to left easily
digits.reverse()

// Double every second digit and adjust if necessary
for (let i = 1; i < digits.length; i += 2) {
  digits[i] *= 2;
  if (digits[i] > 9) {
    digits[i] -= 9;
  }
}

// Sum all digits
const sum = digits.reduce((acc, digit) => acc + digit, 0);

// Check if the sum is divisible by 10
return sum % 10 === 0;
}



