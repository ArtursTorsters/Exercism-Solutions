export function proverb(...words: string[]): string {
  let text = '';

  for(let i = 0; i < words.length - 1; i++) {
    text += `For want of a ${words[i]} the ${words[i+1]} was lost.\n`;
  }

  text += `And all for the want of a ${words[0]}.`;

  return text;
}
