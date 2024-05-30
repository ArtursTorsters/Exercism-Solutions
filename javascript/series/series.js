export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    // store the size
    let result = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      // Extract the slice of length 'sliceLength' starting from index 'i'
      let slice = this.series.substring(i, i + sliceLength);
      // Convert the slice to an array of numbers
      let sliceArray = Array.from(slice, Number)
      result.push(sliceArray)
    }
    if (this.series.length < 1) {
      throw new Error('series cannot be empty')
    } else if (sliceLength >  this.series.length) {
      throw new Error('slice length cannot be greater than series length')
    } else if(sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    }else if (sliceLength < 0){
      throw new Error('slice length cannot be negative')
    } 

    return result
  }
}
