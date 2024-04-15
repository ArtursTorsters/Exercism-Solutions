export function encode(plainText: string): string {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let reversedAlphabet = [...alphabet].reverse()
  let encoded = ''

  for (let letter of plainText) {
    let index = alphabet.indexOf(letter.toLowerCase())
    if (index !== -1) {
      encoded += reversedAlphabet[index]
    } else if (!isNaN(parseInt(letter))) { // Check if the character is a number
      encoded += letter
    } else {
      encoded += '' // If the character is neither a letter nor a number, ignore it
    }
  }

  // Convert 'o' to uppercase if present in the encoded string
  if (encoded.indexOf('o') !== -1) {
    encoded = encoded.replace(/o/g, 'O')
  }

  // Remove spaces, convert to lowercase
  encoded = encoded.replace(/ /g, '').toLowerCase()

  // Insert space after every 5 characters
  let chunks = []
  for (let i = 0; i < encoded.length; i += 5) {
    chunks.push(encoded.slice(i, i + 5))
  }

  // If the sentence ends with '.', remove it from the last chunk
  if (plainText.endsWith('.')) {
    chunks[chunks.length - 1] = chunks[chunks.length - 1].replace('.', '')
  }

  return chunks.join(' ')
}




export function decode(cipherText: string): string {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let reversedAlphabet = [...alphabet].reverse()
  let decoded = ''

  for (let letter of cipherText) {
    let index = reversedAlphabet.indexOf(letter.toLowerCase())
    if (index !== -1) {
      decoded += alphabet[index]
    } else {
      decoded += letter // If the character is not in the reversed alphabet, keep it unchanged
    }
  }
  return decoded.replace(/ /g, '').toLowerCase()
}