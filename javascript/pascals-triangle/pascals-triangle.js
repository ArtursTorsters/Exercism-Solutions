export const rows = (number) => {
  // array with nums
  let triangle = new Array(number);

  // row by row
  for (let i = 0; i < number; i++) {
    let row = new Array(i + 1);

    // first and last row values = 1
    row[0] = 1;
    row[row.length - 1] = 1;

    // values between 1 and 1 so j = 1 and j = -1
    for (let j = 1; j < row.length - 1; j++) {
      //row above 
      let above = triangle[i - 1];
      // current element in rw between one's
      row[j] = above[j - 1] + above[j];
    }

    triangle[i] = row;
  }

  return triangle;
};
