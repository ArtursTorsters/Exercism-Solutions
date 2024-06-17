export const rotate = (input, num) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const rotateLetter = (char) => {
    // if lowecase or uppercase letters
      let index;
      if (/[a-z]/.test(char)) {
          index = letters.indexOf(char);
          // move poisiton
          return letters[(index + num) % letters.length];
      } else if (/[A-Z]/.test(char)) {
          index = uppercaseLetters.indexOf(char);
                    // move poisiton
          return uppercaseLetters[(index + num) % uppercaseLetters.length];
      } else {
          return char; // if not letter just return
      }
  }

  // split in to chars and rotate over them
  const rotatedArray = input.split('').map(char => rotateLetter(char)).join('')

  return rotatedArray
}