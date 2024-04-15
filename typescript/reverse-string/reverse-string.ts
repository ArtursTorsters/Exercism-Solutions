export function reverse(text: string) {
  //split() string into arr characters
  // reverse() and join() = reversed string
const reversedString =  text.split('').reverse().join('')
  return reversedString
}
