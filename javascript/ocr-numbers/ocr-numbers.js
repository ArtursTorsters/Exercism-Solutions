/* eslint-disable no-prototype-builtins */
//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (str) => {
const obj = {
0:' _ \n' +
  '| |\n' +
  '|_|\n' +
  '   ',
1: '   \n' +
'  |\n' +
'  |\n' +
'   ',
2: ' _ \n' +
' _|\n' +
'|_ \n' +
'   ',
3:    ' _ \n' +
' _|\n' +
' _|\n' +
'   ',
4: '   \n' +
'|_|\n' +
'  |\n' +
'   ',
5:    ' _ \n' +
'|_ \n' +
' _|\n' +
'   ',
6:     ' _ \n' +
'|_ \n' +
'|_|\n' +
'   ',
7:   ' _ \n' +
'  |\n' +
'  |\n' +
'   ',
8:   ' _ \n' +
'|_|\n' +
'|_|\n' +
'   ',
9:  ' _ \n' +
'|_|\n' +
' _|\n' +
'   ',
10:  '    _ \n' +
'  || |\n' +
'  ||_|\n' +
'      '
}
  // Create a reverse mapping from string representation to number
  const reverseObj = Object.fromEntries(
    Object.entries(obj).map(([num, repr]) => [repr, Number(num)])
  );

  // Look up the string in the reverse mapping
  if (reverseObj.hasOwnProperty(str)) {
    return reverseObj[str];
  } else {
    return 'Representation not found';
  }
};





