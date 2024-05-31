
export class Allergies {

  constructor(allergenIndex) {
    // Store the allergy index
    this.allergies = allergenIndex;
    // Initialize an array to hold the allergens
    this.allergens = [];
    // Parse the allergy index and determine the allergens
    this.parseAllergies();
}

 parseAllergies() {
    const allergensList = [
        "eggs",
        "peanuts",
        "shellfish",
        "strawberries",
        "tomatoes",
        "chocolate",
        "pollen",
        "cats"
    ];
    // Iterate through the allergens list
    for (let i = 0; i < allergensList.length; i++) {
        // Check if the bit corresponding to the allergen is set in the allergy index
        if ((this.allergies & (1 << i)) !== 0) {
            // If set, add the allergen to the allergens array
            this.allergens.push(allergensList[i]);
        }
    }
}

  list() {

    return this.allergens;

  }

  allergicTo(allergen) {

    return this.allergens.includes(allergen);

  }
}
