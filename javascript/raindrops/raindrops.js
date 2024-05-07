//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {

console.log(number)
if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
  return "PlingPlangPlong";
} else if (number % 3 === 0 && number % 5 === 0) {
  return "PlingPlang";
} else if (number % 3 === 0 && number % 7 === 0) {
  return "PlingPlong";
} else if (number % 5 === 0 && number % 7 === 0) {
  return "PlangPlong";
} else if (number % 3 === 0) {
  return "Pling";
} else if (number % 5 === 0) {
  return "Plang";
} else if (number % 7 === 0) {
  return "Plong";
} else {
  return number.toString();
}

};
