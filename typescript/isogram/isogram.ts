export function isIsogram(word: string): any {
  return !/(\w).*\1/i.test(word)
}


