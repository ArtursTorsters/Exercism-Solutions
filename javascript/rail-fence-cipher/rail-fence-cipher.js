

export const encode = (text, row) => {
  let result = '';
  const len = text.length;


  // Row 1: X       X       X       X       X
  // Row 2:   O   O   O   O   O   O   O   O
  // Row 3:     X       X       X       X


// through each row based on the number 2 | 3 | 6 
  for (let i = 0; i < row; i++) {
      // terates through the text at intervals of 2 * (row - 1
      for (let j = i; j < len; j += 2 * (row - 1)) {
          result += text[j];

          // inner loop, characters are appended to result based on their positions calculated by j and 2 * (row - 1) - 2 * i
          if (i !== 0 && i !== row - 1) {
              let temp = j + 2 * (row - 1) - 2 * i;
              if (temp < len) result += text[temp];
          }
      }
  }

  return result;
};








export const decode = (cipher, key) => {
  // create the matrix to cipher plain text
  // key = rows , text.length = columns
  let rail = new Array(key).fill().map(() => new Array(cipher.length).fill('\n'));
 
  // filling the rail matrix to mark the places with '*'
  let dir_down = false;
  let row = 0, col = 0;
 
  for (let i = 0; i < cipher.length; i++) {
    // check the direction of flow
    if (row == 0) dir_down = true;
    if (row == key - 1) dir_down = false;
 
    // place the marker
    rail[row][col++] = '*';
 
    // find the next row using direction flag
    dir_down ? row++ : row--;
  }
 
  // now we can construct the rail matrix by filling the marked places with cipher text
  let index = 0;
  for (let i = 0; i < key; i++)
    for (let j = 0; j < cipher.length; j++)
      if (rail[i][j] == '*' && index < cipher.length) rail[i][j] = cipher[index++];
 
  // now read the matrix in zig-zag manner to construct the resultant text
  let result = '';
  row = 0, col = 0;
  for (let i = 0; i < cipher.length; i++) {
    // check the direction of flow
    if (row == 0) dir_down = true;
    if (row == key - 1) dir_down = false;
 
    // place the marker
    if (rail[row][col] != '*') result += rail[row][col++];
 
    // find the next row using direction flag
    dir_down ? row++ : row--;
  }
 
  return result;
}


