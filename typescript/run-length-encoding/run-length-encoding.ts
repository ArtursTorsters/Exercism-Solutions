// Function to encode a string using run-length encoding
export const encode = (input: string): string =>
  // Using regex to find repeating characters and replace them with their count followed by the character itself
  input.replace(/(.)\1+/g, (match, char) => `${match.length}${char}`);

// Function to decode a string encoded with run-length encoding
export const decode = (input: string): string =>
  // Using regex to find sequences of digits followed by a character and repeating that character the specified number of times
  input.replace(/([0-9]+)(.)/g, (_, count, char) => char.repeat(count));
