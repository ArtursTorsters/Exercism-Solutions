
export class Clock {
  public hours: number;
  public minutes: number;


  constructor(hour: number, minute: number = 0) {
    // Calculate additional hours if minutes exceed 60
    const additionalHours: number = Math.floor(minute / 60)
    // Normalize hours to be within 0-23 range
    hour = hour - 24 * Math.floor((hour + additionalHours) / 24) + additionalHours
    // If hour becomes negative, adjust to 24-hour format
    if (hour < 0) {
        hour = 24 - hour
    }
    // Set the hours and minutes of the clock instance
    this.hours = hour
    this.minutes = minute - 60 * additionalHours
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


