/* eslint-disable no-prototype-builtins */
interface newData {
  [key: string]: any
}

interface old {
  [key: string]: string[]
}

export function transform(oldData: old): newData {
  let newData: newData = {}

  // iterate over each key in oldData
  for (const key in oldData) {
    if (oldData.hasOwnProperty(key)) {
      // letters with current key
      const letters = oldData[key]

      // iterate over letters[] 
      for (const letter of letters) {
        // get tje letter and assign it as key to newData object
        newData[letter.toLowerCase()] = Number(key)
      }
    }
  }

  return newData
}


