export function count(text: string): Map<string, number> {
  const match = text.match(/(?:[a-zA-Z0-9](?:'[a-zA-Z0-9])*)+/g)
  if (!match) {
    return new Map()
  }

  const words = match

  const wordCount = new Map<string, number>()


  for (const word of words) {
    const lowercaseWord = word.toLowerCase()
    const count = wordCount.get(lowercaseWord) || 0
    wordCount.set(lowercaseWord, count + 1)
  }

  return wordCount
}
