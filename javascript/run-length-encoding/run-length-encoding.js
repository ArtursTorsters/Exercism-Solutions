

export const encode = (str) => {
  let n = str.length
  let result = ''
  
  for (let i = 0; i < n; i++) {
    // count characters in string
    let count = 1;
    while (i < n - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    // count and chars to the result
    // if more than one char then with count if only one then only chars returned
    if(count > 1) {
      result += count + str[i]

    } else if (count === 1) {
      result +=  str[i]
    }
  }
  
  return result
}

//encode
//   input.replace(/(.)\1+/g, (match, char) => `${match.length}${char}`)



export const decode = (str) => {
  // Using regex to find sequences of digits followed by a character and repeating that character the specified number of times
  return str.replace(/([0-9]+)(.)/g, (_, count, char) => char.repeat(count))



};


