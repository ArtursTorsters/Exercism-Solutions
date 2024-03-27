
// not great at all , but oh well
export const commands = (input: number) => {
  console.log("actual input", input)
  // to binary and add 5 zeros  = 5bit number so reverse would work
  const binaryNum = input.toString(2).padStart(5, '0')
  const text = ['wink', 'double blink', 'close your eyes', 'jump']
  const handshake: string[] = []

  for (let i = 0; i < binaryNum.length; i++) {
    // if 1 exists then add text
    if (binaryNum.charAt(binaryNum.length - 1 - i) === '1' && text[i]) {
      handshake.push(text[i]) // push to text[]
    }
  }

  // reverse
  if (binaryNum === '11111' || binaryNum === '10011' || binaryNum === '11000') {
    return handshake.reverse()
  }

  return handshake
}


// this is more clean 

// export function commands(value: number) {
//   // Input validation
//   if (typeof value !== 'number' || value < 1 || value > 31) {
//     return [];
//   }

//   // Convert value to binary representation and pad it to 5 digits
//   const binaryDigits = value.toString(2).padStart(5, '0');
//   const actions = [];

//   // Check each binary digit and add corresponding action to the actions array
//   if (binaryDigits[4] === '1') actions.push('wink');
//   if (binaryDigits[3] === '1') actions.push('double blink');
//   if (binaryDigits[2] === '1') actions.push('close your eyes');
//   if (binaryDigits[1] === '1') actions.push('jump');

//   // If the fifth bit is set to 1, reverse the order of actions
//   if (binaryDigits[0] === '1') actions.reverse();

//   return actions;
// }
