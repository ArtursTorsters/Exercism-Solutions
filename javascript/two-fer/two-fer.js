//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// if no name - One for you, one for me.'
// if Alice  -One for Alice, one for me
// another name - One for Bob, one for me.
export const twoFer = (name) => {
  if (name === "Alice") {
    return "One for Alice, one for me.";
  } else if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
};

twoFer()