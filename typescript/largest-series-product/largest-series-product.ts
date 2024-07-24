export const largestProduct = (input: string, num: number) => {

  if(num > input.length ) {
    throw new Error ('Span must be smaller than string length')
  } else if (input === '' && num === 1) {
    throw new Error ('Span must be smaller than string length')
  } else if (input.match(/[^$,.\d]/)) {
    throw new Error ('Digits input must only contain digits')
  } else if (num < 0) {
    throw new Error ('Span must not be negative')
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - num; i++) {
    const chunk = input.substring(i, i + num);
    const smallerChunk = chunk.split('');

    if (smallerChunk.length < num) {
      continue;
    }

    // converting characters to numbers and then multiplying 
    const final = smallerChunk.reduce((acc, char) => acc * Number(char), 1);

    // Update maxProduct if the current product is larger
    if (final > maxProduct) {
      maxProduct = final;
    }
  }



  return maxProduct;
}






