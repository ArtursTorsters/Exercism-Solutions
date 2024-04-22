export function nucleotideCounts(dna: string): { [key: string]: number } | string {
// ATTACG

// init obj with empty values
const counts: { [key: string]: number } = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

for (let letter of dna) {
    if (letter === 'A' || letter === 'C' || letter === 'G' || letter === 'T') {
      // key and number 
        counts[letter]++;
    } else {
        throw new Error ("Invalid nucleotide in strand")
    }
}

return counts;
}







