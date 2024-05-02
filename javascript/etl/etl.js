//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
console.log(old)

// new obj
const expected = {}

// iterate over keys (1,2,3 etc) and values ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
for (const [key, value] of Object.entries(old)) {
    // Iterate over the array of letters for each key
    for (const letter of value) {
        // Convert the letter to lowercase and assign it as a key in the expected object
        expected[letter.toLowerCase()] = parseInt(key)
    }
}

return expected

};




