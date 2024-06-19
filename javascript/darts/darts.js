//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x,y) => {

  // pythogoras theorem  distance = x square + y square
  let distance = Math.sqrt(x * x + y * y);
 let score = 0;

 if (distance <= 1) {
   score = 10;
 } else if (distance <= 5) {
   score = 5;
 } else if (distance <= 10) {
   score = 1;
 } else {
   score = 0;
 }

 return score;
};
