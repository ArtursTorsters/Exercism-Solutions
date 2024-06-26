
export const translate = (rna = '') => {
  const codons = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP",
  };

  let decode = [];
  
  // Iterate through the RNA sequence in steps of 3 (codons)
  for (let i = 0; i < rna.length; i += 3) {
    // Extract the current codon
    const currentCodon = rna.slice(i, i + 3);

    // Check if the current codon is valid
    if (!(currentCodon in codons)) throw new Error("Invalid codon");

    // Break the loop if a STOP codon is encountered
    if (codons[currentCodon] === "STOP") break;

    // Add the corresponding amino acid to the decode array
    decode.push(codons[currentCodon]);
  }
  
  return decode;
};
