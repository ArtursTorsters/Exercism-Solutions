
export class DnDCharacter {
  public cStrength: number;
  public cConstitution: number;
  public cWisdom: number;
  public cIntelligence: number;
  public cDexterity: number;
  public cCharisma: number;
  public cHitpoints: number;

  constructor() {
    this.cStrength = DnDCharacter.generateAbilityScore();
    this.cConstitution = DnDCharacter.generateAbilityScore(); 
    this.cWisdom = DnDCharacter.generateAbilityScore();
    this.cIntelligence = DnDCharacter.generateAbilityScore();
    this.cDexterity = DnDCharacter.generateAbilityScore();
    this.cCharisma = DnDCharacter.generateAbilityScore();
    this.cHitpoints = 10 + Math.floor((this.cConstitution - 10)/2);
  }
  
  get strength() { return this.cStrength; }
  get constitution() { return this.cConstitution; }
  get wisdom () { return this.cWisdom; }
  get intelligence() { return this.cIntelligence; }
  get dexterity() { return this.cDexterity; }
  get charisma() { return this.cCharisma; }
  get hitpoints() { return this.cHitpoints; }
  
  public static generateAbilityScore(): number {
    let rolls: number[] = [];
    for (let i = 0; i < 4; i++) 
      rolls[i] = Math.round(Math.random() * 6);
  
    const sorted = rolls.sort();
    return sorted.slice(1).reduce((acc, num) => acc + num, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
