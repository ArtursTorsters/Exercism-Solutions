export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.normalize();
  }

  // Normalize the time so that hours and minutes are in the correct range
  normalize() {
    // Calculate total minutes to handle overflow
    let totalMinutes = this.hours * 60 + this.minutes;
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440; // Normalize total minutes to be within 0 and 1439

    // Calculate normalized hours and minutes
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }

  toString() {
    const pad = (number) => String(number).padStart(2, '0');
    return `${pad(this.hours)}:${pad(this.minutes)}`;
  }

  plus(minutes) {
    this.minutes += minutes;
    this.normalize();
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    this.normalize();
    return this;
  }

  equals(otherClock) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
  }
}
