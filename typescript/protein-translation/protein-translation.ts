export function translate(codon: string) {
  const codons = codon.match(/.{1,3}/g) // get all codons sepeerat  [ UUU, AUG.. ]
  const result: string[] = []

  if (!codons) return result

  for (const c of codons) {
    switch (c) {
      case "AUG":
        result.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        result.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        result.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        result.push("Serine");
        break;
      case "UAU":
      case "UAC":
        result.push("Tyrosine");
        break;
      case "UGU":
      case "UGC":
        result.push("Cysteine");
        break;
      case "UGG":
        result.push("Tryptophan");
        break;
      case "UAA":
      case "UAG":
      case "UGA":
        return result
      default:
      throw new Error("Invalid codon")
    }
  }

  return result
}
