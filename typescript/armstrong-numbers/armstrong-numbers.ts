export function isArmstrongNumber(number: number | BigInt): boolean {
  if (typeof number === "number" || typeof number === "bigint") {
    // num to string
    const numberAsString = number.toString()
    if (numberAsString.length === 1) {
      return true // singles all are armstrong numbers
    } else {
      const power = BigInt(numberAsString.length)
      let sum = BigInt(0)
      for (let digitChar of numberAsString) {
        const digit = BigInt(parseInt(digitChar, 10))
        sum += digit ** power
      }
      return sum === BigInt(number)
    }
  } else {
    return false
  }
}
