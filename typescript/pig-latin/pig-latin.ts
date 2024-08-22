// export function translate(word: string): string {

// console.log(word);
// const vowels = "aeiou"
// const consonants = "bcdfghjklmnpqrstvwxyz"
// const specialPrefixes = ["xr", "yt", "qu"];

// if (vowels.includes(word[0]) || specialPrefixes.some(prefix => word.startsWith(prefix))) {
//   // console.log(word + "ay");
//   return word + "ay";
// }
// if(consonants.includes(word[0])) {
//   console.log(word.replace(/^([bcdfghjklmnpqrstvwxyz]+)(.*)$/, '$2$1ay'))
//   return word.replace(/^([bcdfghjklmnpqrstvwxyz]+)(.*)$/, '$2$1ay');
// }


// return ""
// }



function translateWord(word: string): string {
  if (/^[aeiou]/.test(word)) return word + 'ay';
  if (/^[^aeiou]/.test(word))
    return word.replace(/^([^aeiuo]?qu|[^aeiuo]+)(.+)$/, '$2$1ay');

  return word;
}

export function translate(phrase: string): string {
  return phrase.split(' ').map(translateWord).join(' ');
}
