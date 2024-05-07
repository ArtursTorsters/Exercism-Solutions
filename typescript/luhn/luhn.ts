export function valid(digitString: string): boolean {
  // Remove all spaces from the input string
  const sanitizedDigitString = digitString.replaceAll(" ", "")

  // Check if the sanitized string is '0', which is invalid according to the Luhn algorithm
  if (sanitizedDigitString == "0") {
    return false;
  }
  
  // Flag to determine whether the current digit should be doubled
  let shouldDouble = false;

  // Calculate the sum of the digits using the Luhn algorithm
  let sum = sanitizedDigitString
    // Convert the string to an array of characters, reverse it, and iterate over each character
    .split('')
    .reverse()
    .map((char) => { 
      // Convert the character to a number
      let num = parseInt(char)

      // Throw an error if the character is not a valid number
      if (num == null) {
        throw new Error('is not a number')
      }

      // Double the number if the 'shouldDouble' flag is true
      if (shouldDouble) {
        num *= 2

        // If the doubled number is greater than 9, subtract 9
        if (num > 9) {
          num -= 9
        }
      }

      // Toggle the 'shouldDouble' flag for the next iteration
      shouldDouble = !shouldDouble

      // Return the processed number
      return num
    })
    // Calculate the total sum by adding all the processed numbers together
    .reduce((total, num) => total + num)

  // Check if the sum is divisible by 10, indicating a valid Luhn number
  return sum % 10 == 0;
}
