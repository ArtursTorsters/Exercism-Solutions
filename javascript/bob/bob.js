//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMessage = message.trim();

  if (trimmedMessage.length === 0) {
    return "Fine. Be that way!";
  }

  const lowercaseLetters = message.match(/[a-z]+/);
  const uppercaseLetters = message.match(/[A-Z]+/);
  const isYelling = uppercaseLetters && !lowercaseLetters;

  const endsInQuestionMark = trimmedMessage.endsWith("?");

  if (isYelling && endsInQuestionMark)
    return "Calm down, I know what I'm doing!";
  if (isYelling) return "Whoa, chill out!";
  if (endsInQuestionMark) return "Sure.";

  return "Whatever.";
};
