export class List {
  #values;

  // Constructor to initialize the List with values (default empty array if no values provided)
  constructor(values = []) {
    this.#values = values;
  }

  // Getter method to return a copy of the values array
  get values() {
    return [...this.#values];
  }

  // Method to append another List to the current List
  append(list) {
    return list.foldl((acc, value) => new List([...acc.values, value]), this);
  }

  // Method to concatenate another List or value(s) to the current List
  concat(list) {
    return list.foldl((acc, value) => acc.append(value instanceof List ? value : new List([value])), this);
  }

  // Method to filter the values in the List based on a predicate function
  filter(pred) {
    return this.foldl((acc, value) => pred(value) ? acc.append(new List([value])) : acc);
  }

  // Method to apply a function to each value in the List and return a new List of the results
  map(fn) {
    return this.foldl((acc, value) => acc.append(new List([fn(value)])));
  }

  // Method to return the length of the List
  length() {
    return this.foldl(length => length + 1, 0);
  }

  // Method to fold (reduce) the List from left to right using a function and an initial accumulator value
  foldl(fn, acc = new List()) {
    const [first, ...rest] = this.#values;
    return first === undefined ? acc : new List(rest).foldl(fn, fn(acc, first));
  }

  // Method to fold (reduce) the List from right to left using a function and an initial accumulator value
  foldr(...args) {
    return this.reverse().foldl(...args);
  }

  // Method to reverse the order of values in the List
  reverse() {
    return this.foldl((acc, value) => new List([value]).append(acc));
  }
}
