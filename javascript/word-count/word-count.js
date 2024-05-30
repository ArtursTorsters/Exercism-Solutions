export const countWords = (str) => {
  // regex to match the words needed
  const words = str.match(/\b[\w']+\b/g);

  // store in obj 
  let result = {};

  // Iterate through each word
  if (words) {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
            word = word.toLowerCase();
      
      // If the word is not empty, count it
      if (word !== "") {
        if (!result[word]) {
          result[word] = 1;
        } else {
          result[word] += 1;
        }
      }
    }
  }

  return result;
};
