
export class Clock {
  public hours: number;
  public minutes: number;

  constructor(hours: number, minutes: number = 0) {
    // Normalize minutes and hours
    this.hours = (hours + Math.floor(minutes / 60)) % 24;
    this.minutes = minutes % 60;
  }


  // just convert to string
  public toString(): string {
    const formattedHours = this.hours.toString().padStart(2, '0');
    const formattedMinutes = this.minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  public equals(other: any): boolean {
    if (!(other instanceof Clock)) {
      return false;
    }
    return this.hours === other.hours && this.minutes === other.minutes;
  }
}
