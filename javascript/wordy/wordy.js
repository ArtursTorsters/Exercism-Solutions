//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {

  const validSyntax = /^What is((?:-|\d+|\s+|plus|minus|multiplied by|divided by)*)\?$/.exec(question)
  if (!validSyntax) {
  throw new Error("Unknown operation")
}
  if (!/^ *-?\d+(?: +(?:plus|minus|multiplied by|divided by) +-?\d+)*$/.test(validSyntax[1])) {
  throw new Error("Syntax error")
}
// take only 'plus', 'minus' etc and remove all other words
const words = validSyntax[1].trim().replaceAll(" by", "").split(" ")

// find the first number
let result = Number(words[0])

// iterates through the array of words, starting from index 1 (since the first element is a number) and skipping every alternate word
for (let i = 1; i < words.length; i += 2) {
  switch (words[i]) {
    case "plus":
      result += Number(words[i + 1])
      break;
    case "minus":
      result -= Number(words[i + 1])
      break;
    case "multiplied":
      result *= Number(words[i + 1])
      break;
    case "divided":
      result /= Number(words[i + 1])
      break;
  }
}

return result

};
