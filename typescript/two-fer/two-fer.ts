export function twoFer(name: string): string {
  if (name === "Alice") {
    return "One for Alice, one for me.";
  } else if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
}
