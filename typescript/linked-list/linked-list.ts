export class LinkedList<T> {
  //  initialized as an empty array
  array: number[];

  // Constructor initializes the array as an empty array
  constructor() {
    this.array = [];
  }

  // Method to add an element to the end of the array
  public push(element: number) {
    return this.array.push(element);
  }

  // Method to remove and return the last element from the array
  public pop(): number | undefined {
    return this.array.pop();
  }

  // Method to remove and return the first element from the array
  public shift(): number | undefined {
    return this.array.shift();
  }

  // Method to add an element to the beginning of the array
  public unshift(element: number) {
    return this.array.unshift(element);
  }

  // Method to delete all occurrences of a specific element from the array
  public delete(element: number) {
    // Use filter to create a new array excluding the specified element
    this.array = this.array.filter((l) => l !== element);
  }

  // Method to return the number of elements in the array
  public count(): number {
    return this.array.length;
  }
}
