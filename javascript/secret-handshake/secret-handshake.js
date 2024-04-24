export const commands = (value) => {
  // Input validation
  if (typeof value !== 'number' || value < 1 || value > 31) {
    return []
  }

  // add 5 zeros to the end
  const binaryDigits = value.toString(2).padStart(5, '0')
  const actions = [];


  // if index is set to 1 do the action 
  // 00001 = wink
  if (binaryDigits[4] === '1') actions.push('wink');
  //00010 = double blink
  if (binaryDigits[3] === '1') actions.push('double blink');
  //00100 = close your eyes
  if (binaryDigits[2] === '1') actions.push('close your eyes');
  //01000 = jump
  if (binaryDigits[1] === '1') actions.push('jump');

  // If the fifth bit is set to 1, reverse the order of actions
  if (binaryDigits[0] === '1') actions.reverse();

  return actions;
}


