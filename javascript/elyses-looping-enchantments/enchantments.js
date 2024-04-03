// @ts-check


export function cardTypeCheck(stack, cardType) {
  // Initialize a variable to count the number of cards of the specified type
  let count = 0;

  // Iterate over each card in the stack using forEach
  stack.forEach((card) => {
    // Check if the current card matches the specified card type
    if (card === cardType) {
      // Increment the count if the card matches the specified type
      count++;
    }
  });

  // Return the number of cards of the specified type
  return count;
}


export function determineOddEvenCards(stack, type) {
  // Initialize a variable to count the number of cards that match the type
  let count = 0;

  // Iterate over each card in the stack
  for (let i = 0; i < stack.length; i++) {
    // Check if the card is even and type is true, or if the card is odd and type is false
    if ((stack[i] % 2 === 0 && type) || (stack[i] % 2 !== 0 && !type)) {
      // Increment the count if the card matches the type
      count++;
    }
  }

  // Return the count of cards that match the type
  return count;
}