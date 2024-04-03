export function find(haystack: number[], needle: number): any {
  // left is set to 0, first array number,
  // and right is set to haystack.length - 1 - last number in arr
 
  let left = 0;
  let right = haystack.length - 1

  if (left > right) {
    return null
  }

  // find where the middle of the array is
  const mid = Math.floor((left + right) / 2)

  // check if the needle: number is in middle
  if (haystack[mid] === needle) {
    return mid;
  } else if (haystack[mid] < needle) {
    // value at mid is < needle: number - search the right half
    left = mid + 1 // update left to search the right half
  } else {
    // If the value at mid  >  needle: number - search the left half
    right = mid - 1 // update right to search the left half
  }
}
