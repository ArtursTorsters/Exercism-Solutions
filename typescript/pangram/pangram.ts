export function isPangram(input:string) {
  // use set to remove dups
return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26;

}
