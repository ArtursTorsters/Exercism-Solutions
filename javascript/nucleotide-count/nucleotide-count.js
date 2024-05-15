//Given a str representing a DNA sequence, count how many of each nucleotide is present.
//  If the str contains characters that aren't A, C, G, or T then it is invalid and you should signal an error.

export function countNucleotides(str) {
  const counts = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  };

  for (let i = 0; i < str.length; i++) {
    const nucleotide = str[i];
    if (!(nucleotide in counts)) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[nucleotide]++;
  }

  // Format the counts as a string
  const result = `${counts['A']} ${counts['C']} ${counts['G']} ${counts['T']}`;

  return result;
}






