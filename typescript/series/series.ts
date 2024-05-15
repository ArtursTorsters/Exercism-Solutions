export class Series {
  private series: string; // Private property to store the series of digits

  constructor(series: string) {
    // Constructor to initialize the Series object with the provided series
    if (!series) throw new Error('series cannot be empty'); // Check if series is empty
    this.series = series; // Assign the provided series to the private property
  }

  slices(sliceLength: number): number[][] {
    // Method to slice the series into contiguous substrings of length sliceLength
    if (sliceLength === 0) throw new Error('slice length cannot be zero'); // Check if sliceLength is zero
    if (sliceLength < 0) throw new Error('slice length cannot be negative'); // Check if sliceLength is negative
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length'); // Check if sliceLength is greater than series length

    // Initialize an empty array to store the slices
    let slices: number[][] = [];

    // Loop through the series from the end to ensure contiguous substrings are captured
    for (let i = this.series.length - sliceLength; i >= 0; i--) {
      // Initialize an empty array to store the characters of the current slice
      let charArray = [];
      // Loop through the characters of the current slice
      for (let j = i; j < i + sliceLength; j++) {
        // Convert each character to a number and push it to the charArray
        charArray.push(parseInt(this.series[j]));
      }
      // Add the charArray representing the current slice to the slices array
      slices.unshift(charArray);
    }

    // Return the array of slices
    return slices;
  }
}
