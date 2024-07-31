


export const largestProduct = (digits, howManyTimes) => {

  // Check for invalid span
  if (howManyTimes <= 0) {
    throw new Error('Span must be greater than zero');
  } else if (howManyTimes > digits.length) {
    throw new Error('Span must be smaller than string length');
  }

  // Check for invalid characters
  if (!/^\d+$/.test(digits)) {
    throw new Error('Digits input must only contain digits');
  }


// digits to array
let test = digits.split("").map(Number)
let resultArr = [];
let results = []; // multiplied value in the arrays

test.forEach((currentElement, index) => {
  resultArr.push(currentElement);

  // Check if the chunk is complete
  if ((index + 1) % howManyTimes === 0) {
    // Multiply the numbers in the current chunk
    let myValue = resultArr.reduce((a, b) => a * b, 1); // Initialize with 1
    results.push(myValue); // Store the result
    resultArr = []; // Reset the array for the next chunk

    
  }

  
});


// returning the largest number from arr
return Math.max(...results)

}



// export const largestProduct = (digits, howManyTimes) => {
//   // Check for invalid span
//   if (howManyTimes <= 0) {
//     throw new Error('Span must be greater than zero');
//   } else if (howManyTimes > digits.length) {
//     throw new Error('Span must be smaller than string length');
//   }

//   // Check for invalid characters
//   if (!/^\d+$/.test(digits)) {
//     throw new Error('Digits input must only contain digits');
//   }

//   // Convert the string to an array of numbers
//   const numArray = digits.split("").map(Number);

//   let maxProduct = 0;

//   // Iterate through the array to find the maximum product
//   for (let i = 0; i <= numArray.length - howManyTimes; i++) {
//     // Get the current slice of the array
//     const slice = numArray.slice(i, i + howManyTimes);

//     // Calculate the product of the current slice
//     const product = slice.reduce((a, b) => a * b, 1); // Initialize with 1

//     // Update maxProduct if the current product is larger
//     if (product > maxProduct) {
//       maxProduct = product;
//     }
//   }

//   return maxProduct;
// };
