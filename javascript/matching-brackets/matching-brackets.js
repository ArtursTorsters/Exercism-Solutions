const regex = /{}|\[\]|\(\)/g;

export const isPaired = (str) => {
  // Remove all characters that are not brackets
  str = str.replace(/[^\[\]\{\}\(\)]+/g,"");

  if (str === "") return true;

  // Check if the string contains any paired brackets using regex
  // If it does, remove those pairs and recursively call isPaired
  // If not, return false indicating unbalanced brackets
  return regex.test(str) ? isPaired(str.replace(regex,"")) : false;
};

