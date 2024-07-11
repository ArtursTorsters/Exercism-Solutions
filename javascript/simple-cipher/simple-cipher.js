
const alphabets = "abcdefghijklmnopqrstuvwxyz";

export class Cipher {
  // Constructor initializes the cipher with a given key or defaults to "dddddddddd"
  constructor(key = "dddddddddd") {
    this.key = key;
  }

  encode(text) {
    // Ensure the key is at least as long as the text by repeating it as necessary
    while (this.key.length < text.length) {
      this.key = this.key + this.key;
    }

    // Split the text into an array of characters and map each character to its encoded counterpart
    return text
      .split("")
      .map((x, i) => 
        // Find the new character by shifting the original character's position
        // by the position of the corresponding key character in the alphabet
        alphabets[(alphabets.indexOf(x) + alphabets.indexOf(this.key[i])) % 26]
      )
      .join("")
  }


  decode(text) {
    // Ensure the key is at least as long as the text by repeating it as necessary
    while (this.key.length < text.length) {
      this.key = this.key + this.key;
    }

    // Split the text into an array of characters and map each character to its decoded counterpart
    return text
      .split("")
      .map((x, i) =>
        // Find the original character by shifting back the encoded character's position
        // by the position of the corresponding key character in the alphabet
        alphabets[
          alphabets.indexOf(x) - alphabets.indexOf(this.key[i]) < 0
            ? alphabets.indexOf(x) - alphabets.indexOf(this.key[i]) + 26 // Adjust if index goes negative
            : (alphabets.indexOf(x) - alphabets.indexOf(this.key[i])) % 26
        ]
      )
      .join("") // join the array back
  }
}
