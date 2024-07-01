//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (int) => {
  let roman = '';

  //we take integer as Roman value and
  //divide it by an example : 10 and if there is no remainder , it means that it is 10 and it will return  'X'
  //repeat() tells how many times Roman num to repeat as str


  roman += 'M'.repeat(int / 1000);
  int %= 1000;

  roman += 'CM'.repeat(int / 900);
  int %= 900;

  roman += 'D'.repeat(int / 500);
  int %= 500;

  roman += 'CD'.repeat(int / 400);
  int %= 400;

  roman += 'C'.repeat(int / 100);
  int %= 100;

  roman += 'XC'.repeat(int / 90);
  int %= 90;

  roman += 'L'.repeat(int / 50);
  int %= 50;

  roman += 'XL'.repeat(int / 40);
  int %= 40;

  roman += 'X'.repeat(int / 10);
  int %= 10;

  roman += 'IX'.repeat(int / 9);
  int %= 9;

  roman += 'V'.repeat(int / 5);
  int %= 5;

  roman += 'IV'.repeat(int / 4);
  int %= 4;

  roman += 'I'.repeat(int);

  return roman;
}