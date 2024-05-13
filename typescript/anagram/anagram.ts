export class Anagram {
  word: string;

  constructor(word: string) {
    this.word = word.toLowerCase();
  }

  public matches(...potentials: string[]): string[] {   // potentions array with potentional matches
    // Sort the characters of the original word alphabetically
    const sortedWord = this.sortString(this.word);

    // Filter potential anagrams to include only those that are not identical to the original word
    // and whose sorted characters match the sorted characters of the original word
    return potentials.filter((potential) => {
      // Convert potential word to lowercase
      const lowercasePotential = potential.toLowerCase();
      
      // Exclude the original word itself and check if the sorted characters match
      return lowercasePotential !== this.word && this.sortString(lowercasePotential) === sortedWord;
    });
  }

  private sortString(str: string): string {
    // Helper function to sort the characters of the string alphabetically
    // by splitting the string into an array of characters, sorting it, and then joining it back into a string
    return str.split('').sort().join('');
  }
}
