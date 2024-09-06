// /* eslint-disable no-prototype-builtins */


// export const convert = (str) => {
// const obj = {
// 0:' _ \n' +
//   '| |\n' +
//   '|_|\n' +
//   '   ',
// 1: '   \n' +
// '  |\n' +
// '  |\n' +
// '   ',
// 2: ' _ \n' +
// ' _|\n' +
// '|_ \n' +
// '   ',
// 3:    ' _ \n' +
// ' _|\n' +
// ' _|\n' +
// '   ',
// 4: '   \n' +
// '|_|\n' +
// '  |\n' +
// '   ',
// 5:    ' _ \n' +
// '|_ \n' +
// ' _|\n' +
// '   ',
// 6:     ' _ \n' +
// '|_ \n' +
// '|_|\n' +
// '   ',
// 7:   ' _ \n' +
// '  |\n' +
// '  |\n' +
// '   ',
// 8:   ' _ \n' +
// '|_|\n' +
// '|_|\n' +
// '   ',
// 9:  ' _ \n' +
// '|_|\n' +
// ' _|\n' +
// '   ',
// 10:  '    _ \n' +
// '  || |\n' +
// '  ||_|\n' +
// '      ',
// 110101100:    '       _     _        _  _ \n' +
// '  |  || |  || |  |  || || |\n' +
// '  |  ||_|  ||_|  |  ||_||_|\n' +
// '                           ',
// 1234567890:     '    _  _     _  _  _  _  _  _ \n' +
// '  | _| _||_||_ |_   ||_||_|| |\n' +
// '  ||_  _|  | _||_|  ||_| _||_|\n' +
// '                              ',
// 123456789:     '    _  _ \n' +
// '  | _| _|\n' +
// '  ||_  _|\n' +
// '         \n' +
// '    _  _ \n' +
// '|_||_ |_ \n' +
// '  | _||_|\n' +
// '         \n' +
// ' _  _  _ \n' +
// '  ||_||_|\n' +
// '  ||_| _|\n' +
// '         '
// }

// // reverse mapping of the obj

// const reverseObj = Object.fromEntries(
//     Object.entries(obj).map(([num, numString]) => [numString, String(num)])
//   );

//   if (reverseObj.hasOwnProperty(str)) {
//     console.log( "numbers",reverseObj[str].toString())
//     return reverseObj[str];
//   } else {
//     return '?';
//   }
// };










export const convert=input=>{let[binDec,out]=[{175:0,9:1,158:2,155:3,57:4,179:5,183:6,137:7,191:8,187:9},""];input=input.replace(/\n/g,"-").replace(/[\s]/g,"0").replace(/[|_]/g,"1").split("-");for(let j=0;j<input.length;j+=4){for(let i=0;i<input[0].length;i+=3)out+=binDec[parseInt(input[j].substring(i,i+3)+input[j+1].substring(i,i+3)+input[j+2].substring(i,i+3),2)];out+=","}return out.replace(/undefined/gi,"?").slice(0,-1)};