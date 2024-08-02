export class TwoBucket {

  buckTwo: number;
  buckOne: number;
  liters: number;
  bucketToFill: any;

  constructor(buckOne: number, buckTwo: number, liters: number, bucketToFill: any) {
    this.buckOne = buckOne;
    this.buckTwo = buckTwo;
    this.liters = liters;
    this.bucketToFill = bucketToFill;
  }

  moves() {
  

    
  }

  get goalBucket() {
    throw new Error('Remove this statement and implement this function')
  }

  get otherBucket() {
    throw new Error('Remove this statement and implement this function')
  }
}
