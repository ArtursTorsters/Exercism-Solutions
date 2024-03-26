export class Robot {
  private static allocatedNames = new Set<string>();

  private _name: string;

  constructor() {
    this._name = Robot.newName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.newName();
  }

  public static releaseNames(): void {
    this.allocatedNames.clear();
  }

  private static newName(): string {
    let name;
    do {
      name = `${this.randomLetter()}${this.randomLetter()}${this.randomDigit()}${this.randomDigit()}${this.randomDigit()}`;
    } while(this.allocatedNames.has(name));
    this.allocatedNames.add(name);
    return name;
  }

  private static randomLetter(): string {
    const offset = Math.floor(Math.random() * 26);
    return String.fromCharCode("A".charCodeAt(0) + offset);
  }

  private static randomDigit(): string {
    return Math.floor(Math.random() * 10) + '';
  }
}
