export class Allergies {
  allergies: number;
  allergens: string[];

  constructor(allergenIndex: number) {
      // Store the allergy index
      this.allergies = allergenIndex;
      // Initialize an array to hold the allergens
      this.allergens = [];
      // Parse the allergy index and determine the allergens
      this.parseAllergies();
  }

  private parseAllergies(): void {
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

  public list(): string[] {
      // Return the list of allergens
      return this.allergens;
  }

  public allergicTo(allergen: string): boolean {
      // Check if the given allergen is in the list of allergens
      return this.allergens.includes(allergen);
  }
}


