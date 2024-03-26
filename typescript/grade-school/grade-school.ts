type InnerRoster = Map<string, number>;
type Grade = string[];
type Roster = Record<number, Grade>;

export class GradeSchool {
  private readonly _roster: InnerRoster = new Map([]);
  
  roster(): Roster {
    const result: Roster = {};
    this._roster.forEach((key, value) => {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(value);
      result[key].sort();
    });
    return result;
  }

  add(name: string, grade: number): void {
    this._roster.set(name, grade);
  }

  grade(grade: number): Grade {
    return this.roster()[grade] || [];
  }
}
